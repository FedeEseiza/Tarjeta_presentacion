$(document).ready(function(){
    var banner = {
        padre: $('#banner'),
        numeroSlides: $('#banner').children('.slide').length,
        posicion: 1
    }
    var info = {
        padre: $('#info'),
        numeroSlides: $('#info').children('.slide').length,
        posicion: 1
    }
    banner.padre.children('.slide').first().css({
        'left': 0,
    });
    info.padre.children('.slide').first().css({
        'left': 0,
    });
    /*Calcula el alto del banner*/
    var altoBanner = function(){
        var alto = banner.padre.children('.slide').outerHeight();
        banner.padre.css({
            'height': alto + 'px'
        });
    }
    /*Calcula el alto del article*/
    var altoInfo = function(){
        var alto = info.padre.children('.active').outerHeight();
        info.padre.animate({
            'height': alto + 'px'
        });
    }
    altoBanner();
    altoInfo();
    /* Se ajusta el tamaño segun el tamaño de la pantalla */
    $(window).resize(function(){
        altoBanner();
        altoInfo();
    });
    // Para tener un boton por slide
    $('#info').children('.slide').each(function(){
        $('#botones').append('<span>');
    });
    // Para ponerle la propiedad active al primer boton
    $('#botones').children('span').first().addClass('active')
    
    // Boton siguiente Banner //
    $('#banner-next').on('click',function(e){
        // Todos los hijos que no sean de la clase active empiecen a la derecha//
        banner.padre.children().not('.active').css({
            'left': '100%'
        });
        /* Evita que se agrege el simbolo de direccion en la url */
        e.preventDefault();
        if (banner.posicion < banner.numeroSlides){
             /* Pasa las imagenes del banner cambiando la propiedad active de una a otra */
            $('#banner .active').removeClass('active').next().addClass('active').animate({
                'left': 0
            });
            //A medida que paso las imagenes se van moviendo en oreden a la izquierda //
            $('#banner .active').prev().animate({
                'left': '-100%'
            });
            banner.posicion = banner.posicion + 1;
        }else{
            // Hacemos que el slide activo (es decir el ultimo), se anime hacia la derecha
            $('#banner .active').animate({
                'left': '-100%'
            });
            // Seleccionamos todos los slides que no tengan la clase .active y los ponemos a la drecha
            banner.padre.children().not('.active').css({
                'left': '100%'
            });
            // Se elimina la clase active y se la pone al primer elemento
            $('banner .active').removeClass('active');
            banner.padre.children('.slide').first().addClass('active').animate({
                'left' : 0
            });
            // Se resetea la pos a 1 
            banner.posicion = 1;
        }  
    });
    // Boton Anterior
		$('#banner-prev').on('click', function(e){
			e.preventDefault();

			if (banner.posicion > 1){

				// Nos asegramos de todos los elementos hijos (que no sean) .active
				// se posicionen a la izquierda
				banner.padre.children().not('.active').css({
					'left': '-100%'
				});

				// Deslpazamos el slide activo de izquierda a derecha
				$('#banner .active').animate({
					'left': '100%'
				});

				// Eliminamos la clase active y se la ponemos al slide anterior.
				// Y lo animamos
				$('#banner .active').removeClass('active').prev().addClass('active').animate({
					'left': 0
				});

				// Reiniciamos la posicion a 1
				banner.posicion = banner.posicion - 1;
			} else {

				// Nos aseguramos de que los slides empiecen a la izquierda
				banner.padre.children().not('.active').css({
					'left': '-100%'
				});

				// Animamos el slide activo hacia la derecha
				$('#banner .active').animate({
					'left': '100%'
				});

				// Eliminamos la clase active y se la ponemos al primer elemento.
				// Despues lo animamos.
				$('#banner .active').removeClass('active');
				banner.padre.children().last().addClass('active').animate({
					'left': 0
				});

				// Reseteamos la posicion a 1
				banner.posicion = banner.numeroSlides;
			}

		});
    // Boton Info Banner (SE PUEDE MEJORAR)//
    $('#info-next').on('click',function(e){
        // Todos los hijos que no sean de la clase active empiecen a la derecha//
        info.padre.children().not('.active').css({
            'left': '100%'
        });
        /* Evita que se agrege el simbolo de direccion en la url */
        e.preventDefault();
        if (info.posicion < info.numeroSlides){
             /* Pasa las imagenes del banner cambiando la propiedad active de una a otra */
            $('#info .active').removeClass('active').next().addClass('active').animate({
                'left': 0
            });
            //A medida que paso las imagenes se van moviendo en oreden a la izquierda //
            $('#info .active').prev().animate({
                'left': '-100%'
            });
            // Le asigno la propiedad active a cada boton a medida que avanzo
            $('#botones').children('.active').removeClass('active').next().addClass('active')
            info.posicion = info.posicion + 1;
        }else{
            // Hacemos que el slide activo (es decir el ultimo), se anime hacia la derecha
            $('#info .active').animate({
                'left': '-100%'
            });
            // Seleccionamos todos los slides que no tengan la clase .active y los ponemos a la drecha
            info.padre.children().not('.active').css({
                'left': '100%'
            });
            // Se elimina la clase active y se la pone al primer elemento
            $('info .active').removeClass('active');
            info.padre.children('.slide').first().addClass('active').animate({
                'left' : 0
            });
            // Le quito el active al utlmo boton y se lo pongo al primero
            $('#botones').children('.active').removeClass('active');
            $('#botones').children('span').first().addClass('active');
            // Se resetea la pos a 1 
            info.posicion = 1;
        } 
        altoInfo(); 
    });
    // Boton Anterior
		$('#info-prev').on('click', function(e){
			e.preventDefault();

			if (info.posicion > 1){

				// Nos asegramos de todos los elementos hijos (que no sean) .active
				// se posicionen a la izquierda
				info.padre.children().not('.active').css({
					'left': '-100%'
				});

				// Deslpazamos el slide activo de izquierda a derecha
				$('#info .active').animate({
					'left': '100%'
				});

				// Eliminamos la clase active y se la ponemos al slide anterior.
				// Y lo animamos
				$('#info .active').removeClass('active').prev().addClass('active').animate({
					'left': 0
				});
                // Le asigno la propiedad active a cada boton a medida que retrocedo
                $('#botones').children('.active').removeClass('active').prev().addClass('active');
				// Reiniciamos la posicion a 1
				info.posicion = info.posicion - 1;
			} else {

				// Nos aseguramos de que los slides empiecen a la izquierda
				info.padre.children().not('.active').css({
					'left': '-100%'
				});

				// Animamos el slide activo hacia la derecha
				$('#info .active').animate({
					'left': '100%'
				});

				// Eliminamos la clase active y se la ponemos al primer elemento.
				// Despues lo animamos.
				$('#info .active').removeClass('active');
				info.padre.children().last().addClass('active').animate({
					'left': 0
				});
                 // Le quito el active al primer boton y se lo pongo al ultimo
                $('#botones').children('.active').removeClass('active');
                $('#botones').children('span').last().addClass('active');
				// Reseteamos la posicion a 1
				info.posicion = info.numeroSlides;
			}
            altoInfo();
		});
});