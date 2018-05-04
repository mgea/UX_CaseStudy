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
        $("#eventos_por_dia").html("<h4>Eventos de hoy</h4><p>Charla sobre igualdad de género<br><button type='button' class='btn btn-xs'>Mas info</button><br>Exposición de fotografía moderna<br><button type='button' class='btn btn-xs'>Mas info</button></p><p><button id='mas_eventos_diarios' type='button' class='btn btn-xs'>Mas eventos</button></p>");;
    });

    $("#boton_busqueda").click(function(){
        $("#eventos_busqueda").show();
    });

    $("#mas_eventos_diarios").click(function(){
        $("#mas_eventos_diarios").css('display', 'none');
        $("#eventos_por_dia").html("<h4>Eventos de hoy</h4><p>Charla sobre igualdad de género<br><button type='button' class='btn btn-xs'>Mas info</button><br>Exposición de fotografía moderna<br><button type='button' class='btn btn-xs'>Mas info</button><br>Visita a la Alhambra guiada<br><button type='button' class='btn btn-xs'>Mas info</button><br>Concierto de música clásica<br><button type='button' class='btn btn-xs'>Mas info</button></p><p><button id='mas_eventos_diarios_2' type='button' class='btn btn-xs'>Mas eventos</button></p>");;
    });

});