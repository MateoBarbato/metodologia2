# Sistema de Motos , Repuestos y Accesorios.


# Definir alcance del proyecto.

Sistema de venta de produtos de motos ONLINE, permite la compra de productos sin necesidad de regsitro, solo otorgando datos.
El sitema vende Motos y productos relacionados ( accesorios y repuestos )
El sistema mantiene un trackeo de los envios relaizados y notifica al cliente en los cambios de estado.
Definir pasarela de pago ( Trasnferencia | Rebill | MercadoPago )


## Dominio
El sistema no se encarga de la logistica, se terceriza a una empresa de logistica.


# Actores internos | externos.
Proveedor de Logistica
Proveedor de pasarela de pago ( si se elije )

#Definir casos de uso de los siguientes:

## Invetario 


Categorias de productos.
enum Categoria {
	ACCESORIO,
	MOTOS,
	REPUESTOS,
}


## Facturacion


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


