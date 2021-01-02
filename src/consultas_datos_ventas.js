/* Sintaxis para obtener el total ventas en el año 2020 usando operador de etapa $group  y operador $multiply, contando el número de ventas hechas */



db.ventas.aggregate(
    [
      {
        $group:
          {
            _id: { anualidad: { $year: "$fecha_venta" } },
            venta_total: { $sum: { $multiply: [ "$precio_de_venta", "$unidades" ] } },
            count: { $sum: 1 } 
          }
      }
    ]
 )
 .pretty()
 
 /* Sintaxis para obtener el total de beneficios en el año 2020 usando operador de etapa $group  y operador $multiply y $subtract */
 
 
 
 db.ventas.aggregate(
    [
      {
        $group:
          {
            _id: { anualidad: { $year: "$fecha_venta" } },
            beneficio_total: { $sum: { $multiply: [{ $subtract: ["$precio_de_venta", "$precio_de_coste"]}, "$unidades" ] } },
            count: { $sum: 1 }
          }
      }
    ]
 )
 .pretty()
 
 
 /* Sintaxis para agrupar por fechas (día,  mes y año), calculando las cantidades totales de venta usando operador de etapa $group  y operador $sum */
 
 
 db.ventas.aggregate(
    [
      {
        $group:
          {
            _id: { dia: { $dayOfMonth: "$fecha_venta"}, mes: { $month: "$fecha_venta"}, anualidad: { $year: "$fecha_venta" } },
            cantidad_total: { $sum: { $multiply: [ "$precio_de_venta", "$unidades" ] } },
            count: { $sum: 1 }
          }
      }
    ]
 )
 .pretty()
 
 
 
 
 
 
 /* Sintaxis para ver la cantidad máxima vendida en cada mes usando operador de etapa $group  y operador $max  */ 
 
 
 db.ventas.aggregate(
    [
      {
        $group:
          {
            _id: { mes: { $month: "$fecha_venta"} },
            cantidad_total: { $max: { $multiply: [ "$precio_de_venta", "$unidades" ] } },
            count: { $sum: 1 }
          }
      }
    ]
 )
 .pretty()
 
 
 /* Sintaxis para averiguar la media por vendedor usando operador de etapa $group  y operador $avg  */
 
 
 db.ventas.aggregate(
    [
      {
        $group:
          {
            _id: "$empleado_vendedor",
            cantidad_media: { $avg: { $multiply: [ "$precio_de_venta", "$unidades" ] } }
           
          }
      }
    ]
 )
 .pretty()
 
 
 /* Sintaxis para averiguar el cliente al que nos da la mejor relación precio venta/coste usando operador de etapa $group  y operador $divide  */
 
 
 db.ventas.aggregate(
    [
      {
        $group:
          {
            _id: "$cliente",
            relación_precio_venta_coste: { $avg: { $divide: [ "$precio_de_venta", "$precio_de_coste" ] } }
           
          }
      }
    ]
 )
 .pretty()
 
 
 /* Sintaxis para saber, para el vendedor Francisco Romero, la suma de las ventas de sus productos usando operador de etapa $match  y operador $sum  */ 
 
 
 db.ventas.aggregate(
    [
      {
        $match :
          {
            empleado_vendedor: "Francisco Romero"}         
           
          },
      {
        $group:
          {
            _id: "$producto",
            venta_total: { $sum: { $multiply: [ "$precio_de_venta", "$unidades" ] } }
           
          }
 
 
      }
    ]
 )
 .pretty()
 
 /* Sintaxis para saber qué vendedor ha vendido más dinero en mascarillas, usando operador de etapa $match  y operador $max  */
 
 
 db.ventas.aggregate(
    [
      {
        $match :
          {
            producto: "mascarilla"}         
           
          },
     {
        $group:
          {
            _id: "$empleado_vendedor",
            cantidad_total: { $max: { $multiply: [ "$precio_de_venta", "$unidades" ] } },
            count: { $sum: 1 }
          }
 
 
      }
    ]
 )
 .pretty()
 
 
 
 
 