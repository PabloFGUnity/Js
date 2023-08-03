export default function Card ({element})
{
    const {image,title,description,buttonText,linkTo}=element;
    // con style hay que poner dos llaves {{}} aunque es mejor quitarlo
    return(
        <div className="card w-25" >
        <img src={image} className="card-img-top" alt={`${title}-image`}/>
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={linkTo} className="btn btn-primary">{buttonText}</a>
        </div>
        </div>
    )
}