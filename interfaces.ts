enum Categoria {
	ACCESORIO,
	MOTOS,
	REPUESTOS,
}
enum EstadoPedido {
	PENDIENTE,
	ENVIADO,
	ENTREGADO,
	CANCELADO,
}

interface Usuario {
	id: string;
	email: string;
	nombre: string;
	apellido: string;
	edad: number;
	ciudad: string;
	pais: string;
	telefono: string;
	direccion: string;
	codigoPostal: string;
}

interface Articulo {
	id: string;
	nombre: string;
	descripcion: string;
	precio: number;
	stock: number;
	categoria: Categoria;
	imagen: string;
	disponible: boolean;
	fechaCreacion: Date;
}

interface Pedido {
	id: string;
	fecha: Date;
	estado: EstadoPedido;
	usuario: Usuario;
	articulos: Articulo[];
	total: number;
}

interface Inventario {
	id: string;
	articulos: Articulo[];
	stockTotal: number;
	valorTotal: number;
	fechaActualizacion: Date;
}

interface Carrito {
	id: string;
	usuarioId: string;
	articulos: Articulo[];
	total: number;
	fechaCreacion: Date;
	fechaActualizacion: Date;
}

interface Proveedores { 
    id: string;
    nombre: string;
    email: string;
    telefono: string;
    direccion: string;
    ciudad: string;
    pais: string;
    codigoPostal: string;
    categoria: Categoria;
}

// INFRA

interface Runtime {
    id: string;
}

interface Backend {
	id: string;
    runtime : Runtime;
    baseDeDatos : BaseDeDatos;
}

interface BaseDeDatos { 
    id: string;
    baseDeDatos : BaseDeDatos;
}

interface API { 
    id: string;
    backend : Backend;
}

interface Frontend {
	id: string;
    api : API;
}


Backend : 

Runtime ( elejir una runtime como node.js, python, etc) -> API REST -> Base de datos (elejir una base de datos como MySQL, PostgreSQL, etc) -> Response to Frontend.