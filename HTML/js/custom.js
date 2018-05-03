$( document ).ready(function(){

    $("#cargar_mas_eventos").click(function(){
        $("#cargar_mas_eventos").css('display','none');
        $("#row_eventos").show();
    });

    $("#boton_filtrar").click(function(){
        $("#evento_1").text("Exposición bibliográfica Tutta l’Italia");
        $("#imagen_1").attr('src', 'images/imagenes_eventos/evento_italia.jpg')
        $("#nombre_1").html("Nombre del evento: Exposición bibliográfica Tutta l’Italia <br/> Fecha y hora: 08/05/2018 | 14:30-15:45 h <br/> Localización: Biblioteca del Hospital Real");
        $("#evento_2").text("Mirarnos’: Muestra de arte hecho por mujeres");
        $("#imagen_2").attr('src', 'images/imagenes_eventos/evento_expo.jpg')
        $("#nombre_2").html("Nombre del evento: Mirarnos’: Muestra de arte hecho por mujeres <br/> Fecha y hora: 16/05/2018 | 13:30-15:45 h <br/> Localización:  Centro “Carmen Jiménez");
        $("#row_eventos").css('display', 'none');
    });

    $("#boton_busqueda").click(function(){
        $("#eventos_busqueda").show();
    });
});