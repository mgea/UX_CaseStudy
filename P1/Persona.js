/*******************************************/
/*             PERSONA.JS                  */
/*     Datos para PERSONA TEMPLATE         */   
/*          [DIU] UX Toolkit v1.0 2019    */                        
/*          ver 1.1 26/Feb/2020            */
/*******************************************/
    
/****  README:       */
/****  Modifica los datos para las Personas      */
/****  v.1.1 Incluye nombre de tu grupo de prácticas (Grupo.ID), curso académico y enlace a github ***/
/****  Las imagenes para  'Photo'  están en carpeta ./photos **/
/****  Si se usan nuevas imágenes se deben añadir a esa carpeta **/
/****  Los valores de rating están entre 1..5 **/
/****  recursos de imágenes:  https://www.vectorstock.com/royalty-free-vectors/vectors-by_zdeneksasek ***/



angular.module("angular", [])
	.controller("controller", ["$scope", function($scope) { 
        $scope.Grupo_ID ="DIU2.A";
        $scope.Curso ="2019/20";
        $scope.Github_ID ="https://github.com/mgea/UX-DIU-Toolkit";
        
		$scope.PersonaIndex = 0;
		$scope.Personas = [
			{		
                
                
                /*************************************/
                /**** PRIMERA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 0,
				Name: "Anastasia",
				Photo: "anastasia.jpg",
				Quote: "Súbeme la radio que esta es mi canción",
				Age: 28,
				Occupation: "Camarera",
				Family: "Soltera",
				Location: "Churriana, Granada",
				Character: "Extrovertida y enérgica",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 4 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 3 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 3 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2 }
				], 
				Goals: ["Vivir el momento", "en busca del amor de su vida"],
				Frustrations: ["Siente que no avanza en la vida", "Le gusta su trabajo pero necesita más dinero para ir a festivales"],
				Bio: "Anastasia es una chica de 28 años alegre y sociable, con un trabajo de camarera. Estudió el primer año de la carrera de baile, pero no disfrutaba bailando por obligación y con presión de examenes, prefiere bailar a más bajo nivel y divertirse. Le encanta salir con sus amigos, pero también querría una pareja que le proporcionara una estabilidad. Le gustaría crecer profesionalmente, pero no sabe que hacer ni como.",
				Tech: [
					{ Name: "TIC/Internet", Value: 2 },
					{ Name: "Movil", Value: 4 },
					{ Name: "RRSS", Value: 5 },
					{ Name: "Software", Value: 2 }
					
				], 
                Contextos: "LLeva un tiempo pensando estudiar, pero no sabe qué carrera ni como combinarlo con el trabajo",  
				PreferredChannels: [
					{ Name: "Publicidad Tradicional", Value: 2 },
					{ Name: "Online & Social Media", Value: 4 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			},
			{	
                
                /*************************************/
                /**** SEGUNDA PERSONA          *******/
                /*** Cambiar datos             *******/
                /*************************************/
                
                
				Id: 1,
				Name: "José Pérez",
				Photo: "jose.jpg",
				Quote: "Lo que uno hace con el don de la vida es lo que nos dice quienes somos",
				Age: 18,
				Occupation: "Estudiante",
				Family: "Soltero",
				Location: "Dúrcal, Granada",
				Character: "Tímido",
				PersonalityTraits: [
					{ Name: "Introvertido/reservado Vs  Extrov/activo ", Value: 1 },
					{ Name: "Realista/práctico  Vs    Intuición/imaginativo", Value: 2 },
					{ Name: "Racional/analitico  Vs   Emocional/impulsivo", Value: 2 },
					{ Name: "Flemático/apático  Vs   Colérico/visceral", Value: 2  }
				], 
				Goals: ["Acabar la carrera", "Disfrutar de los videojuegos sin perder tiempo de estudio"],
				Frustrations: ["Le cuesta socializar con la gente", "Quiere dejar de vivir con sus padres"],
				Bio: "José es un chico de 18 años que está empezando la carrera de electrónica. Extremadamente tímido, prefiere pasar el tiempo en su habitación jugando a videojuegos y haciendo proyectos con Arduino. De vez en cuando va con sus amigos a salones del Manga. Tuvo una novia  durante 2 años de adolescente, pero lo dejaron debido a que sus personalidades eran muy diferentes. Quiere irse de casa de sus padres para que no le echen en cara que no sale de su cuarto.",
				Tech: [
					{ Name: "TIC/Internet", Value: 5 },
					{ Name: "Mobile", Value: 4 },
					{ Name: "RRSS", Value: 2 },
					{ Name: "Software", Value: 5 }
					
				], 
                Contextos:   "Espera acabar pronto la carrera para encontrar un trabajo pronto que le permita independizarse" ,
				PreferredChannels: [
					{ Name: "Publicidad Tradicional (Ads)", Value: 3 },
					{ Name: "Online & Social Media", Value: 5 },
					{ Name: "Recomendaciones & sugerencias", Value: 2 },
					{ Name: "Persona confianza (amigos, boca a boca)", Value: 2 }
				]
			}
		];
		$scope.model = $scope.Personas[0];

	}])