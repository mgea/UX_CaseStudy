
## PRÁCTICA 4: EVALUACION. Prubebas de Usabilidad y Testing

Diseño Interfaces de Usuario 

Nº Sesiones: 2    

[<Volver Guiones Prácticas](./README.md) [alt](https://mgea.github.io/UX_CaseStudy/#/GuionesPracticas/)

## Objetivo:


El objetivo es evaluar el prototipo con **usuarios reales** apicando técnicas que nos permitan indagar sobre la experiencia sobre el producto diseñado y posible mejoras. 

Para ello, **usaremos  herramientas que se usan habitualmente en el UX Research** que son imprescindibles para investigación y obtener la información adecuada sobre los usuarios, su contexto y su comportamiento para poder diseñar productos que se ajusten a sus necesidades reales. Se trata de una herramienta imprescindible para conocer mejor al usuario, como la técnica **A/B testing** se puede emplear para medir dos versiones de un mismo prototipo, o dos prototipos para un producto muy similar. Combinaremos con otras técnicas como cuestionario **SUS (System Usability Scale)** o **Eye Tracking**. 

Usaremo esta estrategia de **reclutación de usuarios** donde incluiremos a otros grupos de clase como **método de co-evaluación de las prácticas**. 

También aprenderemos a realizar un **informe de usabildad (usability report)** con las conclusiones más relevantes obtenidas en esta evaluación. Para ello, usaremos herramientas profesionales de investigación y desarrollo de informes de usabilidad combinando diferentes técnicas, como es Maze (https://maze.co/) 


## Planteamiento:

  

Vamos a partir de dos diseños de web (nuestra propuesta  A y otra práctica de otro compañero de clase elegida al azar denominada B). Vamos a seleccionar un conjunto de usuarios que actuarán como usuarios de estas dos prácticas (A y B), y a continuación, éstos deberán rellenar un cuestionario de usabilidad (encuesta SUS). Se hará una valoración de cuál es la mejor opción a partir de los datos recogidos.  

  

Resuma los hallazgos del A/B testing y del checklist de usabilidad en un documento de Informe de Usabilidad de la práctica B (máximo 3 páginas)  para el equipo B que concluya con la evaluación de usabilidad de la práctica del equipo compañero. 

  

Es muy importante que se suba el fichero al repositorio de DIU (CARPETA P4)  de modo que el equipo B pueda acceder a este informe. Por lo mismo, la evaluación de la práctica 3 de su equipo se localizará en el repositorio de los compañeros. 

  
## Descripción de la práctica:

  
Se realizará un estudio PRÁCTICO del interfaz de usuario en base a un grupo de usuarios. Para ello, esta práctica se divide en los siguientes puntos:

### 1. [Reclutamiento participantes estudio]

* Lo primero que debemos hacer es **reclutar los usuarios** con los que vamos a evaluar el proyecto. Para ello **usaremos al menos un grupo de clase** para evaluación mediante A/B testing. 
* En clase de prácticas se organizará la asignación de caso B para co-evaluación, y se publicará en la carpeta de los guiones de prácticas. 
* Además deberemos completar con al menos 3-5 usuarios más (reales) que pueden ser familiares, amigos, personas aleatorias, y a las que se le aplicará las pruebas que realizaremos en siguiente punto.
* Se deberá tener identificado los usarios con una tabla descriptiva demográfica de los mismos y sus características, como por ejemplo: 

|   |   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|---|
|#id. usuario|Sexo/edad|Ocupación|Experiencia internet|Plataforma|Perfil cubierto|TEST|SUS score|
||||[Bajo, <br>Intermedio<br>Avanzado]|Plataforma<br> Tipo, Actividad, Emoción|[A \| B]||

<br>

### 2. [DISEÑAR PRUEBAS] 

Vamos a usar herramienta de apoyo MAZE (https://maze.co/) (gratuita con limitaciones de pruebas para un máximo de 3 proyectos) para diseñar el experimento con usuarios mediante difernetes pruebas, en las que se pueden incluir cuestionarios, test, enlaces a diseños, etc. Se dispone de una multitud de posibilidades de las que se debe **elegir un máximo de 7 tipos de pruebas**. 

* [Primeros pasos usando Maze como herramienta de testeo remoto](https://medium.com/@isi.escobar/primeros-pasos-usando-maze-como-herramienta-de-testeo-remoto-efd8d2daf31a)
* Plantillas disponibles en Maze: https://maze.co/templates/
* Alternativa: **UXtweak** https://www.uxtweak.com/ 

* entre las pruebas que se incluyan se recomienda A/B testing, SUS, eye tracking, ... 

<br>


### 2.1. [Método: A/B testing]

Debemos organizar las dos versiones con documentación para el usuario de lo que debe realizar. Puede ser supervisada (se le da apoyo para hacer tareas) o no supervisada. En ambos casos, habría que darle algunas instrucciones de qué queremos que haga (recorrido libre/dirigido, tareas abiertas/forzadas). Se recomienda que la mitad de los usarios evalúen el caso A y la otra mitad el caso B. Una vez finalizada la evaluación, deberán responder a algú cuestionario que se proponga en el punto anterior (recomendable al menos SUS). 

* [A/B Testing 101](https://www.nngroup.com/articles/ab-testing/)
* [Las claves para realizar un test A/B](https://blog.bismart.com/kale/test-ab-8-pasos)

<br>

### 2.2. [Método: Eye tracking]

Técnicas de benchmarking para evaluar si están bien diseñadas las páginas. Para ello, usaremos [Gaze Recorder](https://gazerecorder.com/) (o similar) para crear el experimento que consistirá en introducir las imágenes (del prototipo) a evaluar, reclutar los usuarios y realizar la prueba de in situ o remota (se puede enviar link para hacerla sin supervisión). Se deben dar unas mínimas instrucciones al usuario de lo que debe hacer en cada página/imagen. Pueden ser tareas supervisadas de atención (por ejemplo: imagen 1 identifica cómo hacer una reserva, dónde está ubicado el local, etc.) o bien de exploración (p.e. mira la imagen/web y concéntrate en lo que más te llama la atención). Identificar al menos UN áreas de interés (AOI) por boceto que deben reconocerse por el usuario. Se aconseja dar un tiempo entre 4-6” por cada imagen

Gaze Recorder está **limitado a 3/4 usuarios**. Podemos hacer 2 test si aplicamos A/B testing y analizaremos los heat map en busca de diferencias significativas entre cómo se había diseñado la tarea y los mapas de calor de los sujetos. También se debe analizar los puntos de interés (AOI) que no han sido observados. Una forma sencilla de realizar este análisis es añadir un usuario experto (del equipo de diseño) y 2 usuarios objetivo, de modo que podamos comprobar diferencias entre ellos.  

Como alternativa, podemos usar **Real Eye** (https://www.realeye.io/) que permite hacer un estudio completo pero limitado en tiempo (+/- 7 días)



  
  

|   |   |
|---|---|
|![](https://lh7-qw.googleusercontent.com/docsz/AD_4nXe38xXenEIMF9vqrU_BR8udArONhKqRUVDs0erKeNbJfrV6XQLZ5d-0xtMU0c5AGnqy786rtuZGNA__LhkbtAPj6ZCdyw-wRkiHANBakSvAWIidjm4sfeiQYISVv6oZROPI0dYD7lSGs41r39OmIQ6wrQHe?key=wYRmjAVkiVNxrzJY5Mv_Vg)<br><br>heatmap|![](https://lh7-qw.googleusercontent.com/docsz/AD_4nXcTQiIKu7qtNrhNzEUy9Sr4EwigImKGxumgXz-svYeMsQ1rDILkpe9lkxIR_JDxwXK0tvUfrmAAjme76VCGPdUcpLbD6fdu5bUG4fpYIVtbmWpHLewIXDebO0byizjHkxRn0eET03esRS1ti1RFxZ3mBfn_?key=wYRmjAVkiVNxrzJY5Mv_Vg)<br><br>  <br><br>Áreas de Interés (AoI)|
  
<br>

### 2.3. [Método SUS QUESTIONNAIRE]

**System Usability Scale Test** (SUS). Cada usuario completará el cuestionario SUS para la aplicación asignada. Es un test de percepción que no funciona como cualquier otro cuestionario. Siga las instrucciones para el cálculo del SUS score y comente en el informe la  preferencia de A sobre B o viceversa.

  Cómo usar la escala SUS e interpretar los resultados (pasar a escala linguística): [http://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/](http://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/)

En el material complementario de la asignatura se encuentra el Excel que calcula SUS score a partir de las siguientes preguntas:

  
|   |   |   |   |   |   |   |
|---|---|---|---|---|---|---|
||PREGUNTAS|1|2|3|4|5|
|1|Creo que me gustará visitar con frecuencia este website||||||
|2|Encontré el website innecesariamente complejo||||||
|3|Pensé que era fácil utilizar este website||||||
|4|Creo que necesitaría del apoyo de un experto para recorrer el website||||||
|5|Encontré las funciones del website bastante bien integradas||||||
|6|Pensé que había demasiada inconsistencia en el website||||||
|7|Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website||||||
|8|Encontré el website muy grande al recorrerlo||||||
|9|Me sentí muy confiado en el manejo del website||||||
|10|Necesito aprender muchas cosas antes de manejarse en el website||||||

  

Hay un formulario compartido Online (que se debe duplicar si se desea usar) en URL: [https://docs.google.com/forms/d/1CwTpZJ08Yn6BX7k_Q5SOOfdX8BZXDDo53QdiIUSJeiY/edit](https://docs.google.com/forms/d/1CwTpZJ08Yn6BX7k_Q5SOOfdX8BZXDDo53QdiIUSJeiY/edit) 

Tambien disponible en PDF: [http://www.measuringux.com/sus/SUS.pdf](http://www.measuringux.com/sus/SUS.pdf) 

En PRADO se encuentra además un EXCEL para los cálculos de 4 usuarios.  [Cuestionario SUS DIU](https://pradogrado.ugr.es/moodle/mod/resource/view.php?id=165778) 

También se puede usar **SUS Calculator** - https://stuart-cunningham.github.io/sus/
  
<br>  
  
### 3. [USABILITY REPORT]

Utilizando **Maze** (o de forma manual) realizaremos un pequeño informe de usabilidad de nuestra aplicación. 

También se creará un informe con los datos obtenidos para la aplicación B del A/B testing y así como recomendaciones de mejoras. 
Este año vamos a SIMPLIFICAR y se puede hacer el informe con la plantilla en MarkDown que podeis encontrar en: [Usability-report-template](https://github.com/mgea/UX_CaseStudy/blob/master/P4/Usability-Report-template.md)
  
Más información: 

- 25 puntos clave de la usabilidad [https://boluda.com/tutorial/25-puntos-clave-de-la-usabilidad/](https://boluda.com/tutorial/25-puntos-clave-de-la-usabilidad/) 
    

  

<br>

## DOCUMENTACIÓN A ENTREGAR

La documentación se AÑADE al repositorio y se sube una copia de respaldo a PRADO los siguientes documentos:
  

- Datos identificativos  del equipo
- Entregables de la práctica: 

1. Reclutamiento de Usuarios + propuesta del proyecto de experimento A/B  (25%)
2. Propuesta de estudio de usabilidad (25%)
3. Resultados del Eye Tracking (25%)
6. Usability Report + conclusiones SUS (25%) 
    

El fichero se llamará {nombre_equipo}_P4, donde grupo: {DIU1, DIU2, DIU3}  se debe además publicar en GITHUB los resultados. 

El informe de usabilidad de la práctica B: se requiere que este archivo esté público en vuestro Github. Este archivo utilizará el siguiente estilo de nombrado: 

P4_UsabReport_{practB}_doneby_{grupo}_{nombre_equipo}

