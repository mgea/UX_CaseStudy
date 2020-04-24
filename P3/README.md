# MuseMap: Análisis del proceso de diseño


## Introducción de la aplicación y detalles técnicos

Lo primero que se realiza es una recolección de primeras ideas y objetivos generales, lo cuál resulta muy atractivo y nos ofrece una primera visión de punto de partida del proyecto. Aquí se recogen ciertos aspectos como los recursos de que se disponen (tiempo, personal, etcétera) como lo que han llamado Oportunidad, que realmente hace referencia a la motivación que se tiene para la realización de la aplicación y los primeros pasos informativos: análisis de los usuarios a los que iría enfocada esta aplicación y del contexto en el que nos encontramos, un paso fundamental previo al diseño, que trata de ver en la vida real cómo interactúan las personas con el arte.


## Investigación social y técnica, previa al diseño

### Análisis competitivo

Tras la introducción, vemos esta comparativa de distintas aplicaciones que pertenecen al área de la que se quiere diseñar. En este caso, no sólo se ha hecho un análisis comparativo de las características, sino que se han centrado también en lo que las personas buscan o podrían buscar en una aplicación como esta y en su valor añadido. Así, por ejemplo, se han incluido cosas del tipo “votar las instalaciones”, característica que no se encontraba en ninguna de las aplicaciones estudiadas en el análisis. Nos ha parecido un análisis acertado y esto último nos otorga una visión más global de lo que podemos hacer.

### Mapa de empatía

Parece acertado en el desarrollo para esta aplicación en concreto el uso de un Mapa de empatía. Si bien nosotras hemos usado en su lugar una malla receptora de la información, creemos que para nuestro caso es mejor para el desarrollo: en MuseMap, han acudido a los sitios donde la gente interactúa con el arte y de ahí han podido sacar conclusiones, a modo de trabajo de campo. En nuestro caso no existe la posibilidad de llevar a cabo estas observaciones como tal y pensamos que se puede extraer información de una forma más sencilla e intuitiva a través de una malla receptora.

### Entrevistas

Nos ha parecido una muy buena idea: pueden ofrecer nuevos puntos de vista y se basan en experiencias reales, por lo que pueden esclarecer los objetivos e incluso eliminar alguna funcionalidad que se pensaba que era fundamental pero realmente carecería de importancia.

### Affinity Mapping

Tras haber realizado tanto trabajo de campo, éste nos parece un punto fundamental del desarrollo del diseño. No obstante, tal y como se presenta en este artículo, resulta caótico y difícil de interpretar: hay muchas flechas, post-its de distinto color pero sin ningún tipo de leyenda, el contenido del mismo está redactado (sería mucho más aclarativo si estuviese estructurado por puntos y palabras clave), lo que hace la lectura más tediosa.
Para la foto que se ha subido queda visualmente estético y da la sensación de que se ha realizado un trabajo muy extenso, pero podría ser mucho más útil si se organizara mejor.
Han redactado unas percepciones (insights) de toda la información que han extraído del trabajo realizado; lo cual es esencial, dado el desbarajuste de información. Sin embargo, siempre resulta una buena idea comprimir toda la información y las visiones recolectadas en unas líneas breves que se puedan consultar en cualquier momento y que compriman ideas.

### Personas ficticias

Es interesante analizar los perfiles de personas que han creado. El nivel de detalle que han utilizado es moderado y cambiante para los dos perfiles mostrados: llama la atención que para Tom no hayan incluido la parte de “Motivaciones” que sí se indica para Jan, lo que nos hace conocerla un poco mejor. La información está desplegada de forma clara y atractiva, no obstante, da la sensación de que los perfiles corresponden a personas similares que de algún modo comparten características (gustos, círculo, eventos sociales, intereses...) o corresponden a personas a las cuáles podría ir dirigida la aplicación. Desde nuestro punto de vista, la creación de estos perfiles debería ser representativa socialmente y real, independiente del mercado al que va dirigida la aplicación; para obtener una percepción más acertada del uso de esta aplicación, aún a expensas de derrumbar la idea preconcebida del mercado que puede usarla.

### Mapa de experiencia de usuario

El Mapa de experiencia de usuario creado está muy detallado, lo que nos acerca en gran medida a la situación que se nos plantea: se ha creado un mapa más general que actúa como resumen y después se ha indagado más en la persona utilizando una escala emocional y un análisis de tareas.
Sin embargo, las conclusiones que los diseñadores sacan de la realización de este mapa son demasiado globales como para extraer tanto conocimiento. Afirman lo siguiente: “Las personas que viven o visitan la ciudad de Londres necesitan una forma de abordar el arte público en mayor medida porque su forma actual de hacerlo es corta y poco profunda”; lo que pensamos que constituye una afirmación exageradamente general para haber sido obtenida de una única situación presentada sobre una única persona ficticia. Sería importante que incluyeran, al menos, otro mapa del otro perfil que han presentado anteriormente; ya que, si no lo incluyen, ¿Cuál es la funcionalidad de haber creado esta persona?


## Proceso de diseño

### User Flow

Nos parece una herramienta genial para marcar el comienzo del proceso de diseño: analizar en rasgos generales cómo interactúa la persona con la aplicación y presentarlo de una forma tan visual (con indicaciones intuitivas sobre cada vez que se abre una página, las acciones y los puntos de inicio y final).

### Fase ideación: Primeros bocetos low fit

Esta fase está muy bien representada y explicada. Tras obtener de este punto las características necesarias, se ha hecho una matriz 2x2 para priorizar las mismas, lo cuál resulta ser una idea fantástica para diseñar el producto de forma consciente y acorde al tiempo y a los recursos de que se disponen (ya que es muy usual que esto no se tenga en cuenta y se plantee un diseño que después quede a medio terminar o se vuelva irrealizable, forzando al equipo a volver atrás y fomentando esa sensación de tiempo perdido).

### Bocetos, primera iteración y test de usabilidad

Tras realizar los primeros bocetos más concisos usando toda la información recogida hasta el momento, se realiza un test de usabilidad sobre los propios bocetos. Consideramos que esto es fundamental para que el diseño final sea satisfactorio, intuitivo y fácil de usar.

En nuestro caso, en lugar de realizar un primer boceto y un test de usabilidad; la tuvimos en cuenta a la hora de realizar los mismos, por lo que se simplificó el proceso en cierta medida. Son dos enfoques distintos de llevar a cabo este paso con sus ventajas y desventajas cada uno: aunque quizá por nuestra parte hayamos ahorrado algo de tiempo, es posible que para los desarrolladores de MuseMap se hayan hecho más evidentes ciertos errores y que tengan esto mucho más presente para un mejor desarrollo de la aplicación.

### Arquitectura de la información

Tras todo este proceso y la realización del segundo boceto, se muestra la arquitectura del sitio. Pensamos que esta herramienta hubiera sido mejor situarla antes de hacer el Wireframe: desde nuestro punto de vista, es mucho más útil saber cuáles van a ser las dependencias entre unas páginas

y otras y cómo va a estar estructurada la aplicación antes de realizar los bocetos, ya que esta es una información valiosa para implementar muchos aspectos del diseño.
En el caso de MuseMap la han incluido justo al final, antes de determinar aspectos del diseño que, aunque son importantes, se alejan de la funcionalidad – botones y demás (la paleta de colores a usar); lo que hace que se desaproveche en cierta medida esta herramienta y se convierta en algo meramente informativo para ayudar en el proceso de desarrollo (una vez comenzamos a programar), pero no en el de diseño.


## Consideraciones generales

La forma en la que está explicada todo este proceso mantiene en todo momento un lenguaje sencillo y estructurado, y la información se ofrece de forma concisa; acompañada de fotos, diagramas y diversos objetos envueltos en color y dispuestos de una forma muy atractiva visualmente; lo que hace este artículo entretenido de leer y muy atractivo. Asimismo, la mayor parte del tiempo (salvo, pensamos, en la arquitectura de la información, como hemos comentado anteriormente) se guarda una relación lógica entre el orden en el que se han llevado a cabo el desarrollo del diseño y en el que se han explicado las acciones tomadas, lo que también lo hace fácil de seguir. Seguimos pensando que hay ciertas incongruencias en algunos Key Findings en relación con las herramientas usadas para llegar a estas conclusiones, como se ha señalado con el mapa de experiencia de usuario; y nos hubiera parecido mucho más acertado ahondar en cierta medida en las personas creadas para obtener una visión más real de hasta dónde puede llegar esta aplicación y por qué medios.
A rasgos generales, nos parece un buen trabajo.



# EatWith: Propuesta de elementos de diseño o patrones a usar


Tomando como referencia la web proporcionada por la práctica de https://www.smashingmagazine.com/web-design-essentials-examples-and-best-practices/ revisaremos buenas decisiones de diseño que realizamos para la creación de bocetos simples para Eatwith, y también apuntaremos aquellos que nos resulten llamativos o necesarios a la hora de realizar un hipotético rediseño de la Web. Al revisar este artículo hemos descubierto que hay muchas funcionalidades que quizá no habíamos contemplado, bien porque nuestros bocetos de la P2 eran demasiado esquemáticos o porque habíamos omitido la necesidad de incluirlos, así que en este apartado ofrecemos descripciones de diseños ideales que integraríamos en la app para mejorar la UX:

### Botones de llamada de acción
En los bocetos simplificados dabamos muestras de un sistema de botones muy intuitivos y que el usuario reconocería a simple vista, como un icono de persona para acceder a nuestro perfil o el botón de unos cascos con micro para representar el acceso a la página de Ayuda. 
Sin embargo, algunos botones como los de redes sociales pueden no ser tan intuitivos para usuarios que no estén acostumbrados a su uso, por tanto consideramos buena práctica incluir pequeñas descripciones acompañándolos.

### Breadcrumbs
En los bocetos presentados no dábamos indicación de incluir breadcrumbs ya que mostrábamos una Arquitectura de la información bastante simplificada. En caso de poseer más niveles de profundidad sería ideal incluir un sistema sencillo en la parte superior de la aplicación indicando la ruta que ha seguido el usuario (Inicio>Seleccionar>Evento>Categoría)

### Barras de búsqueda
Hemos mantenido la barra de búsqueda siempre en el mismo lugar de la interfaz para que el usuario la tenga siempre localizada y no tenga que buscar dónde se encuentra en distintas páginas. Su diseño en la web es bastante simplificado, pero a la vez destacado entre la aleta
de colores rojizos seleccionada para la aplicación por lo que se integra perfectamente.

### Seguimiento de progreso (Progress Tracker)
Los bocetos diseñados en la P2 no entraban en la suficiente profundidad como para necesitar diseñar una barra de progreso de pago para confirmar reserva de un evento. Dado a que estamos realizando el diseño de una aplicación debemos ajustarnos al espacio que ofrece la 
pantalla de un teléfono o tablet, por tanto la propuesta que realizamos es la de crear una numeración en los pasos a seguir durante el pago.

### Mapas
El principal atractivo de nuestra aplicación es disponer de un servicio de eventos ofrecidos según el sistema GPS detecta la zona en la que te encuentras. Es imprescindible, por tanto, que el plano GPS que ofrezca la aplicación sea sencillo e intuitivo, sin información que entorpezca la comprensión de las instrucciones. En una hipotética implementación del sistema crearíamos una pagina con un mapa y con una serie de instrucciones sencillas para ayudar al cliente a llegar a su destino.

### Resultados de la búsqueda
Dentro de nuestro buscador de eventos incluimos la opción de añadir campos para reducir la búsqueda, los cuales se indicarían justo debajo de la barra de búsqueda.

### Calendario
Como nuestra aplicación ofrece servicios de eventos es prioridad que el sistema de calendario sea exacto y conciso. Una buena decisión de implementación sería indicar al lado de cada reserva que tenemos realizada el día en el que se va a celebrar el evento. Aparte, a la
hora de buscar eventos por fecha lo ideal es separarlos en grupos de experiencias celebradas en el mismo día, simplificando la tarea del usuario de estar comprobando continuamente dentro del mismo evento cúando se celebra.

### “Conoce al equipo”
En los bocetos de la app no tuvimos la idea de incluir este tipo de página, pero ahora consideramos que un apartado en el cual se presenta a la empresa trabajadora es una funcionalidad bastante interesante. Da una impresión de acercamiento entre empresa y 
usuario, conocer a los trabajadores y sus motivaciones por los cuales decidieron emprender este proyecto. Incluso puede incluir enlaces a páginas de reclutamiento de trabajadores para personas que han descubierto la aplicación y les gustaría presentar un CV, por ejemplo.

### Página de mantenimiento
Es posible que tengamos que interrumpir los servicios de la app para arreglar dificultades técnicas. Intentamos alejarnos lo máximo posible de la pantalla en blanco tan característica de Error 404 de Google y se presentaría una página que mantiene la estética en colores rojizos de la web, presentando un mensaje de mantenimiento y los motivos por los cuales no se encuentra en funcionamiento la página.


# Historia en Video del UX Case Study

En el siguiente vídeo mostramos un ejemplo de presentación informal sobre el proyecto de prácticas que hemos realizado en la asignatura. Recetup, una aplicación creada para la búsqueda de experiencias culinarias en las que conocer nuevas amistades y que notifica eventos celebrados cerca de tí.

Enlace al vídeo: https://drive.google.com/open?id=10OB28LKxXiYZCieDLNJCARNamZlLxHCo


# Documentación. Valoración del equipo sobre la realización de esta práctica o los problemas surgidos

Esta práctica ha sido muy interesante porque hemos podido evaluar al completo todo el proceso de desarrollo de diseño. El análisis de MuseMap ha resultado muy esclarecedor para mostrarnos el por qué de ciertas herramientas que habíamos incorporado al proyecto y que no sabíamos realmente para qué se utilizaban y hemos aprendido técnicas para disponer la información de forma más dinámica y atractiva. 
