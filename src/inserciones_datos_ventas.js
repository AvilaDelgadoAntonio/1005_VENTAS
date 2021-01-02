/* Insertar datos en la colección VENTAS creados por el propio alumno */


db.ventas.insertMany([

    { "_id" : 1,
      "producto": "mascarilla",
      "precio_de_coste": 0.20,
      "precio_de_venta": 0.80,
      "fecha_venta": ISODate("2020-04-01T08:00:00Z"),
      "unidades": 1000,
      "cliente": "Hospital Macarena",
      "empleado_vendedor": "Francisco Romero",
      "gran_cliente": true
    },{
      "_id" : 2,
      "producto": "guante",
      "precio_de_coste": 0.10,
      "precio_de_venta": 0.70,
      "fecha_venta": ISODate("2020-05-11T08:00:00Z"),
      "unidades": 1000,
      "cliente": "Hospital Macarena",
      "empleado_vendedor": "Francisco Romero",
      "gran_cliente": true
    },{
      "_id" : 3,
      "producto": "bata",
      "precio_de_coste": 2.50,
      "precio_de_venta": 7.50,
      "fecha_venta": ISODate("2020-03-12T08:00:00Z"),
      "unidades": 500,
      "cliente": "Hospital Macarena",
      "empleado_vendedor": "Francisco Romero",
      "gran_cliente": true
    },{
      "_id" : 4,
      "producto": "jeringa",
      "precio_de_coste": 1,
      "precio_de_venta": 3,
      "fecha_venta": ISODate("2020-08-10T08:00:00Z"),
      "unidades": 1000,
      "cliente": "Hospital Macarena",
      "empleado_vendedor": "Francisco Romero",
      "gran_cliente": true
    },{
      "_id" : 5,
      "producto": "mascarilla",
      "precio_de_coste": 0.20,
      "precio_de_venta": 1,
      "fecha_venta": ISODate("2020-03-01T08:00:00Z"),
      "unidades": 50,
      "cliente": "Farmacia Ldo Rodrigo",
      "empleado_vendedor": "Laura Vaz",
      "gran_cliente": false
    },{
      "_id" : 6,
      "producto": "guante",
      "precio_de_coste": 0.10,
      "precio_de_venta": 0.80,
      "fecha_venta": ISODate("2020-04-11T08:00:00Z"),
      "unidades": 50,
      "cliente": "Farmacia Ldo Rodrigo",
      "empleado_vendedor": "Laura Vaz",
      "gran_cliente": false
    },{
      "_id" : 7,
      "producto": "bata",
      "precio_de_coste": 2.50,
      "precio_de_venta": 15,
      "fecha_venta": ISODate("2020-03-12T08:00:00Z"),
      "unidades": 20,
      "cliente": "Farmacia Ldo Rodrigo",
      "empleado_vendedor": "Laura Vaz",
      "gran_cliente": false
    },{
      "_id" : 8,
      "producto": "jeringa",
      "precio_de_coste": 1,
      "precio_de_venta": 4,
      "fecha_venta": ISODate("2020-05-10T08:00:00Z"),
      "unidades": 50,
      "cliente": "Farmacia Ldo Rodrigo",
      "empleado_vendedor": "Laura Vaz",
      "gran_cliente": false
    },{
      "_id" : 9,
      "producto": "mascarilla",
      "precio_de_coste": 0.20,
      "precio_de_venta": 0.60,
      "fecha_venta": ISODate("2020-05-10T08:00:00Z"),
      "unidades": 1000000,
      "cliente": "Hospital Valme",
      "empleado_vendedor": "Manuel Escudero",
      "gran_cliente": true
    }
    ])
    
    