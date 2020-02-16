create table personas (
	id serial primary key,
	nombre varchar(50),
	apellido varchar(50),
	email varchar(100),
	pass varchar(255)
);

create table peliculas(
	id serial primary key,
	titulo varchar(50),
	resumen varchar(255),
	categoria varchar(50),
	valor_entrada integer,
	estado varchar
);

create table salas(
	id serial primary key,
	nombre varchar(100),
	descripcion varchar(100)
);

create table sala_peliculas(
	id serial primary key,
	fecha varchar(10),
	hora varchar(10),
	id_pelicula integer,
	id_sala integer,
	foreign key (id_pelicula) references peliculas(id),
	foreign key (id_sala) references salas(id)
);

create table compras(
	id serial primary key,
	numero_boletos integer,
	id_persona integer,
	id_sala_pelicula integer,
	foreign key (id_persona) references personas(id),
	foreign key (id_sala_pelicula) references sala_peliculas(id)
);

