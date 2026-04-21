# Sistema de Motos , Repuestos y Accesorios.


# Definir alcance del proyecto.

## Dominio


### Sistema Ocupa ||
Sistema de venta de produtos de motos ONLINE, permite la compra de productos sin necesidad de regsitro, solo otorgando datos.
El sitema vende Motos y productos relacionados ( accesorios y repuestos )
El sistema mantiene un trackeo de los envios relaizados y notifica al cliente en los cambios de estado.
Definir pasarela de pago ( Trasnferencia | Rebill | MercadoPago )
Garantia de 1 año del lado del proveedor. ( Garantia a fabrica )


### Sistema no Ocupa ||
El sistema no se encarga de la logistica, se terceriza a una empresa de logistica.

# Actores internos | externos.
Proveedor de Logistica
Proveedor de pasarela de pago ( si se elije )

#Definir casos de uso de los siguientes:

## Invetario 
Sistema facilita un backoffice.
Backoffice se encarga de CRUD de productos, revision de estado de envios, registro de ventas, registro de facturacion.

enum Categoria {
	ACCESORIO,
	MOTOS,
	REPUESTOS,
}


## Facturacion
Definir pasarela de pago ( Trasnferencia | Rebill | MercadoPago )
El sistema ofrece opciones de pago.

## Logistica
Manejar estados de los envios. No nos encargamos de los envios.



enum EstadoPedido {
	PENDIENTE,
	ENVIADO,
	ENTREGADO,
	CANCELADO,
}




## Ventas

Usuario entra a la plataforma, puede



### Definicion de Infra

Backend : 

Runtime ( elejir una runtime como node.js, python, etc) -> API REST -> Base de datos (elejir una base de datos como MySQL, PostgreSQL, etc) -> Response to Frontend.

### Interfaces 
````bash
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
````