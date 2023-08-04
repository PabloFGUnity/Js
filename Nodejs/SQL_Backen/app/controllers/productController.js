const path = require("path");
const fs = require("fs");
const dao = require("../services/dao");
const mime = require("mime")
const productController = {};

productController.uploadImage = async (req, res) => {

    try{
        if (req.files === null) return;
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send("No se ha cargado ningún archivo")
        }

        const images = !req.files.imagen.length
        ? [req.files.imagen]
        : req.files.imagen

        for( const image of images) {

            let uploadPath = path.join(__dirname, "../public/product/" + image.name);

            image.mv(uploadPath ,(err) => {
                if (err) return res.status(500).send(err);
            });

             const img = await dao.addImage({ name: image.name, path: uploadPath });
             console.log(img);
        };

        return res.send("Imagen subida!")

    } catch (err){
        console.log(err.message);
        return res.status(400).send(err.message)
    }
};

productController.getImage = async (req, res) => {
    
    try{
        
        let image = await dao.getImageById(req.params.id)
        console.log(image);
        if (image.length === 0) return res.status(404).send("No hay imagen");
        [image]=image;
        console.log(image);
        return res.send(`Tu imagen es con el id ${req.params.id} con esta ruta: ${image.path}`)

    } catch (err){
        console.log(err.message);
        throw new Error(err)
    }
}

productController.getFile = async (req, res) => {
    
    try{
        
        const image = await dao.getImageById(req.params.id)
        console.log(image);
        if (image.length <= 0) return res.status(404).send("No hay imagen");
        console.log(image[0].path);

        const ruta = image[0].path;

        const tipo = mime.getType(ruta)

        fs.readFile(ruta, function ( err, data ){
            if (err) {
                console.log(err);
                res.status(500).send('Error al leer el archivo')
            } else {
                res.setHeader('Content-Type', tipo)
                res.send(data)
            }
        })

    } catch (err){
        console.log(err.message);
        return res.status(400).send(err.message)
    }
}

productController.addProduct = async (req, res) => {

     console.log("entra");

    const {name, reference } = req.body

    if(!name || !reference ) return res.status(400).send("Error al recibir el body")

    //insertamos el producto en la tabla products y obtenemos el id del producto creado

    //insertamos las imagenes del producto en la tabla images y en el objeto que le pasemos, ademas de name y path, le pasamos el id del producto

    try{

        const product = await dao.getProductByReference(reference)
        if ( product.length > 0) return res.status(409).send("producto ya registrado");

        const addProduct = await dao.addProduct(req.body);
        console.log(addProduct);
        
        if (addProduct) {

            if (!req.files || req.files === null || Object.keys(req.files).length === 0) {
                return res.status(400).send("No se ha cargado ningún archivo")
            }
            console.log('imagenenes que subimos', req.files.imagen);

            const images = !req.files.imagen.length
            ? [req.files.imagen]
            : req.files.imagen

            console.log('images', images);
    
            for( const image of images) {
    
                const uploadPath = path.join(__dirname, "../public/product/" + image.name);
    
                image.mv(uploadPath ,(err) => {
                    if (err) return res.status(500).send(err);
                });
    
                const img = await dao.addImage({ name: image.name, path: uploadPath, productId: addProduct  });
                console.log(img);
            };  
    
            return res.send("Producto creado!")
        } else {
            return res.status(500).send("Error al insertar el producto")
        }
    } catch (err){
        console.log(err.message);
        return res.status(400).send(err.message)
    }

}


productController.getProduct = async (req, res) => {
    const {id} = req.params
    console.log("hola");

    if(!id) return res.status(400).send("Error al recibir el id")

    try {

        const product = await dao.getProductById(id)

        if (!product) return res.status(400).send("No se ha encontrado el producto")

        let image = await dao.getImageById(id)
        console.log(image);
        if (image.length === 0) return res.status(404).send("No hay imagen");
        [image]=image;
        console.log(image);
        return res.send(`Tu imagen es con el id ${req.params.id} con esta ruta: ${image.path}`)

    } catch (err){
        console.log(err.message);
        return res.status(400).send(err.message)
    }

}




module.exports = productController