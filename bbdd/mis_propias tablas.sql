CREATE TABLE `cliente` (
`id` int(10) UNSIGNED NOT NULL,
`nombre` varchar(30) NOT NULL,
`direccion` varchar(30) NOT NULL,
`poblacion` varchar(30) NOT NULL,
`provincia` varchar(30) NOT NULL,
`dni` char(9) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `pedidos_productos` (
`id` int(10) UNSIGNED NOT NULL

) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Para añadir foreign keys pon el ratón encima de la tabla y clicka en la llave inglesa

ALTER TABLE pedidos add column `cantidad` int not null  ;

ALTER TABLE pedidos_productos drop column `fecha`  ;

INSERT INTO `cliente`
(`id`, `nombre`,`direccion`, `provincia`,`dni`,`email`,`password`)
VALUES (3,"Julio","Calle Fuente Nueva","Sevilla","2342310L","julio@gmail.com","1256abc");

insert into `producto`
(`id`, `titulo`,`precio`)
VALUES (3,"Spiderman Miles Morales","40");

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'PabolSQL';

ALTER TABLE `producto`
ADD  primary KEY  (`id`);

ALTER TABLE `producto`
ADD KEY `id` (`id`);

ALTER TABLE `cliente`
ADD CONSTRAINT `nombre` FOREIGN KEY (`id`) REFERENCES
`cliente` (`id`),
ADD CONSTRAINT `producto` FOREIGN KEY (`id`) REFERENCES
`producto` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

SELECT * FROM cliente;
SELECT * FROM producto WHERE precio=20;
delete from cliente where id=5;
Drop index id on producto;