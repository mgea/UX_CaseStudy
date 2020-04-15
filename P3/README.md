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

La forma en la que está explicada todo este proceso mantiene en todo momento un lenguaje sencillo y estructurado, y la información se ofrece de forma concisa; acompañada de fotos, diagramas y diversos objetos envueltos en color y dispuestos de una forma muy atractiva visualmente; lo que hace este artículo entretenido de leer y muy atractivo. Asimismo, la mayor parte del tiempo (salvo, pensamos, en la arquitectura de la información, como hemos comentado anteriormente) se guarda una relación lógica entre el orden en el que se han llevado a cabo el desarrollo del diseño y en el que se han explicado las acciones tomadas, lo que también lo hace fácil de seguir.
Seguimos pensando que hay ciertas incongruencias en algunos Key Findings en relación con las herramientas usadas para llegar a estas conclusiones, como se ha señalado con el mapa de experiencia de usuario; y nos hubiera parecido mucho más acertado ahondar en cierta medida en las personas creadas para obtener una visión más real de hasta dónde puede llegar esta aplicación y por qué medios.
A rasgos generales, nos parece un buen trabajo.
