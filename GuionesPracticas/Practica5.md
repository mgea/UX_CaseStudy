
## PRÁCTICA 5: EVALUACION. Accesibilidad y Prubebas de Usabilidad A/B testing

Diseño Interfaces de Usuario 

Nº Sesiones: 3    

[<Volver Guiones Prácticas](./README.md) [alt](https://mgea.github.io/UX_CaseStudy/#/GuionesPracticas/)

## Objetivo:

El objetivo es evaluar el prototipo con usuarios reales mediante técnicas de investigación que nos permitan profundizar en la experiencia de uso e identificar posibles mejoras.

Para lograrlo, emplearemos herramientas habituales de **UX Research**, fundamentales para obtener datos precisos sobre el comportamiento del usuario y su contexto. La estrategia metodológica combinará cuatro pilares técnicos:

1. **A/B Testing:** Para validar la eficacia de dos variantes de diseño.
2. **Cuestionario SUS (System Usability Scale):** Para medir la percepción subjetiva de la usabilidad de forma estandarizada.
3. **Eye Tracking:** Para analizar visualmente la atención y el recorrido del usuario en la interfaz.
4. **Evaluación de la usabilidad y accesibilidad**  del producto desarrollado.  

La **estrategia de reclutamiento** se basará en un modelo de co-evaluación, integrando a otros grupos de clase para realizar una evaluación cruzada de las prácticas. 

Finalmente, cerraremos el proceso  con la elaboración de un **informe de usabilidad (Usability Report)** que sintetice los hallazgos (*insight*) clave, las conclusiones de la investigación y las **recomendaciones de usabilidad** para la mejora del proyecto.


## Planteamiento:

Partiremos de dos diseños web diferenciados: nuestra propuesta (**Diseño A**) y la solución desarrollada por otro compañero de clase (**Diseño B**). Para realizar un **estudio entre-sujetos** (*Between-Subjects Study*) reclutaremos participantes que evaluarán una de las dos, permitiéndonos obtener:

1. **Datos demográficos** para caracterizar a la población del estudio.
2. **Métricas de uso y comportamiento**, combinando la interacción real con datos biométricos obtenidos mediante **Eye Tracking**.
3. **Percepción subjetiva**, mediante la administración del cuestionario de usabilidad **SUS** al finalizar las pruebas.

Finalmente, concluiremos el estudio analizando los resultados mediante un **análisis SUS multivariable** para comparar ambas soluciones. Esto nos permitirá elaborar un **informe de usabilidad** detallado (**centrado en Diseño B**) que incluya las conclusiones de la comparativa y recomendaciones de mejora para el diseño evaluado. En ese informe se incluirá un breve informe de **evaluación de accesibilidad** 

El informe estará disponible en el repositorio (CARPETA P4)  de modo que el equipo B pueda acceder a este informe.  


## Descripción de la práctica:

Se realizará un estudio PRÁCTICO del interfaz de usuario en base a un grupo de usuarios. Para ello, esta práctica se organiza en los siguientes pasos: 

### 1. [Plan de reclutamiento de participantes]

El proceso de evaluación se basa en una estrategia de muestreo mixto, combinando la evaluación por pares (co-evaluación) con pruebas de usuarios externos para garantizar la diversidad de los datos.

El reclutamiento se basa en dos grupos :

- **Reclutamieno de Co-evaluación (grupo de Clase):** Se reclutarán al menos **3 participantes** del grupo de clase. Su función principal será la evaluación del **Caso A (propia propuesta)**. Este proceso se coordinará durante las sesiones de prácticas.
- **Reclutamiento de Usuarios Externos:** Se reclutarán entre **7 participantes adicionales** (familiares, amigos o usuarios potenciales). A este segmento se le aplicará el flujo completo de investigación: interacción real mediante tareas, seguimiento ocular (**Eye Tracking**) y medición de percepción subjetiva (**SUS**) sobre uno de los casos asignados (A o B).

El objetivo es alcanzar una muestra de **10 usuarios distintos** (distribuidos en 5 para el Caso A y 5 para el Caso B) para permitir un análisis comparativo robusto.

**Protocolos de adaptación:**

1. **Muestra reducida:** En caso de no alcanzar los 10 usuarios independientes, se optará por un modelo **intra-sujeto (Within-Subjects)**, donde parte de los usuarios evaluarán ambos casos (A y B). Esta variable se verá reflejada y segmentada en las tablas de datos finales.
2. **Optimización de Eye Tracking:** Si por limitaciones temporales o técnicas no fuera posible realizar el seguimiento ocular a toda la muestra, se priorizará esta prueba para un **mínimo de 3 usuarios clave**, garantizando así datos cualitativos suficientes para el análisis visual. Cualquier reducción en la muestra será debidamente justificada en el informe final. **Tablas de datos:** Recuerda que si un usuario evalúa A y B, sus respuestas en el SUS pueden estar sesgadas por la fatiga o por haber aprendido de la primera web. Asegúrate de que la mitad de esos usuarios pruebe primero la A y la otra mitad primero la B (**Contrabalanceo**).

Para el análisis demografico, se recomienda recoger una tabla (anonimizada) de usuarios con al menos estos datos: 

* **ID del Participante:** (ej. P01, P02). Mantén siempre el anonimato.

* **Edad:** Factor clave para la agudeza visual y la destreza tecnológica.

* **Género:** Útil para ver si existen sesgos de segmentación.

* **Nivel de Competencia Digital:** Clasificar como *Bajo, Medio o Alto*. Es vital para entender por qué alguien se pierde en la interfaz.

Para la prueba de eye tracking es importante conocer estos factores técnicos que pueden alterar el mapa de calor:

- **Uso de Gafas/Lentillas:** Pueden generar reflejos que dificulten el seguimiento de la pupila.
- **Condiciones de Iluminación:** (ej. Luz natural, Luz artificial tenue). Afecta a la cámara.
- **Dispositivo y Resolución:** No es lo mismo un portátil de 13" que un monitor de 24". Esto cambia la posición de los elementos visuales.

Por último,  datos sobre Experiencia Previa

- **Conocimiento previo:** p.e. sobre el estudio ¿ha participado antes en pruebas de usabilidad? o sobre la app a estudiar ¿has usado herramientas similares?  
- **Rol:** (ej. Estudiante, Diseñador, Usuario final).

Esta actividad, aunque está la primera en la lista, se podrá realizar en paralelo con el diseño de las pruebas. Para recoger los datos de usuarios usaremos la **herramienta online https://tally.so/** para recoger datos y cuestionario, que se explica en apartado 4 (Cuesionario SUS).  

### 2. [Diseño de la prueba mediante: Eye Tracking]

En esta fase utilizaremos [**GazeMapping**](https://github.com/mgea/gazemapping, una herramienta de desarrollo propio que permite realizar evaluaciones de seguimiento ocular sobre elementos visuales estáticos. Este análisis es fundamental para validar la jerarquía visual y la ubicación de elementos críticos mediante el estudio de **Zonas de Interés (AOI/POI)**.

EL proceso consistirá en: 

* **Instalación local de GazeMapping** , para poder organizar contenido a muestrear

* **Rasterizar Diseño**:  convertir a imágenes las páginas principales de nuestro diseño (2-3 páginas). Para ello se puede usar la **extensionde Chrome** [**FireShot**](https://chromewebstore.google.com/detail/take-webpage-screenshots/mcbpblocgmgfnpjjppndjkmgjaogfceg?hl=es))
* Añadir los Puntos de Interes (**POI**) para dirigir experimento (p.e. CTA, logos, menus, etc.)
* Redactar un ejercicio para **acciones que debe realizar el usuario** (navegación libre, buscar CTA, logo...)
* Finalizar sesión y obtener **mapa de calor** (heatmap) del cual se puedan obtener conclusiones acerca del diseño.

Existen otras alternativas (limitadas) de Eye tracking que se pueden usar en caso de dificultades, como [Gaze Recorder](https://gazerecorder.com/) o [RealEye](https://www.realeye.io/es)  


|                                                              |                                                              |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![](https://lh7-qw.googleusercontent.com/docsz/AD_4nXe38xXenEIMF9vqrU_BR8udArONhKqRUVDs0erKeNbJfrV6XQLZ5d-0xtMU0c5AGnqy786rtuZGNA__LhkbtAPj6ZCdyw-wRkiHANBakSvAWIidjm4sfeiQYISVv6oZROPI0dYD7lSGs41r39OmIQ6wrQHe?key=wYRmjAVkiVNxrzJY5Mv_Vg)<br><br>heatmap | ![](https://lh7-qw.googleusercontent.com/docsz/AD_4nXcTQiIKu7qtNrhNzEUy9Sr4EwigImKGxumgXz-svYeMsQ1rDILkpe9lkxIR_JDxwXK0tvUfrmAAjme76VCGPdUcpLbD6fdu5bUG4fpYIVtbmWpHLewIXDebO0byizjHkxRn0eET03esRS1ti1RFxZ3mBfn_?key=wYRmjAVkiVNxrzJY5Mv_Vg)<br><br>  <br><br>Áreas de Interés (POI) |



### 3. [Evaluación caso A o B]

Finalmente se completa **estudio con el uso del sitio real por parte del usuario,** dando indicaciones acerca de **alguna tarea a realizar** (reserva un producto, consulta horario...). Puede ser supervisada (se le da apoyo para hacer tareas) o no supervisada. En cualquier caso, se deberá indicar si ha necesitado ayuda par completar tareas. Duración entre 5-10 min aproximadamente. 



### 4. [Escala SUS: Cuestionario]

Finalizada la evaluación por parte del usuario, debe rellenar el **cuestionario SUS**.  El cuestionario está disponible en https://tally.so/. se puede usar la siguiente plantilla:  https://tally.so/templates/escala-sus-test-de-usabilidad/wAyNNw

* **Configuración del cuestionario** , se puede hacer una copia del cuestionario y amplíar con preguntas demograficas comentadas en apartado 1 (reclutamiento) y que se pueden añadir al final del cuestionario.
* **Rellenar datos por parte del usuario**. Es importante que entienda claramente cómo responder al cuestionario. 
* **Análisis de resultados  con  SUS tools**   https://sus.tools/. Los datos JSON de los usuarios  se pegan directamente en la herramienta https://sus.mixality.de/ como análisis multivariable (https://sus.mixality.de/) y se extraen conclusiones. 


|      | PREGUNTAS                                                    | 1    | 2    | 3    | 4    | 5    |
| ---- | ------------------------------------------------------------ | ---- | ---- | ---- | ---- | ---- |
| 1    | Creo que me gustará visitar con frecuencia este website      |      |      |      |      |      |
| 2    | Encontré el website innecesariamente complejo                |      |      |      |      |      |
| 3    | Pensé que era fácil utilizar este website                    |      |      |      |      |      |
| 4    | Creo que necesitaría del apoyo de un experto para recorrer el website |      |      |      |      |      |
| 5    | Encontré las funciones del website bastante bien integradas  |      |      |      |      |      |
| 6    | Pensé que había demasiada inconsistencia en el website       |      |      |      |      |      |
| 7    | Imagino que la mayoría de las personas aprenderían muy rápidamente a utilizar el website |      |      |      |      |      |
| 8    | Encontré el website muy grande al recorrerlo                 |      |      |      |      |      |
| 9    | Me sentí muy confiado en el manejo del website               |      |      |      |      |      |
| 10   | Necesito aprender muchas cosas antes de manejarse en el website |      |      |      |      |      |

Información de cómo usar la escala SUS e interpretar los resultados (pasar a escala linguística): [http://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/](http://usabilitygeek.com/how-to-use-the-system-usability-scale-sus-to-evaluate-the-usability-of-your-website/)



### [5. Evaluación de Accesibidad]

Finalizaremos con un estudio de accesibilidad  del **caso B**. Para incluir un informe de accesibilidad basado en herramientas automáticas y normativas de forma profesional teniendo en cuenta el **cumplimiento técnico** (relacionado con la forma de diseñar el software) y de la **normativa legal** (las pautas WCAG).

El marco normativo para la web, el estándar es el **WCAG (Web Content Accessibility Guidelines)**.

- **Nivel de conformidad:** Generalmente se busca el **AA** (el estándar legal para sitios públicos y empresas), Versión  **WCAG 2.1 o 2.2**. Referencia: norma **UNE-EN 301549** 

Para realizar el análisis usaremos **Herramientas Automáticas** (debermos indicarlo en informe) como 

- **Lighthouse (Google):** Para una puntuación rápida de accesibilidad.
- **WAVE (Web Accessibility Evaluation Tool):** Excelente para errores visuales y de contraste.    

El informe deberrá organizar los resultados en esta 4 categorias: 

| **Categoría**    | **Qué analizar (Ejemplos)**                                  |
| ---------------- | ------------------------------------------------------------ |
| **Perceptible**  | Contraste de colores, texto alternativo en imágenes (`alt`), subtítulos. |
| **Operable**     | Navegación por teclado, tiempo suficiente para leer, evitar destellos. |
| **Comprensible** | Idioma de la página definido, formularios claros, errores fáciles de corregir. |
| **Robusto**      | Código limpio (HTML válido) para que los lectores de pantalla funcionen. |

Un ejemplo de resultado sería: 

* **Perceptible:**  
  * Error detectado: **Falta de contraste en el botón de reservar**.
  * **Criterio WCAG incumplido:** "Criterio 1.4.3 - Contraste mínimo".
  * **Impacto:** "Los usuarios con visión baja no pueden identificar la acción principal".
  * **Recomendación de mejora:** "Cambiar el color del texto de gris claro a negro (#000000)".

El informe debería dar una **valoracion general de accesibilidad** e incluir al menos **2-3 resultados identificados y clasificados adecuadamente**. 



### [6 USABILITY REPORT]

Usar la **plantilla** [Usability-report-template](https://github.com/mgea/UX_CaseStudy/blob/master/P5/Usability-Report-template.md) y completar los resultados para el **CASO B** siguiendo este formato recomendado 

* Resumen ejecutivo  (Executive Summary)
* Metodología y Reclutamiento
* Resultados del Cuestionario SUS (Datos Cuantitativos)
* Análisis de Eye Tracking (Datos Biométricos)
*  Auditoría de Accesibilidad 
* Conclusiones y Recomendaciones (Actionable Insights)

Más información: 

- 25 puntos clave de la usabilidad [https://boluda.com/tutorial/25-puntos-clave-de-la-usabilidad/](https://boluda.com/tutorial/25-puntos-clave-de-la-usabilidad/) 
  
  
  

### Resumen de herramientas usadas: 

* **Tally.so**  Cuestionarios online y SUS  https://tally.so/

  * Plantilla de cuestionario SUS: https://tally.so/templates/escala-sus-test-de-usabilidad/wAyNNw

* **GazeMapping**  Eye tracking  https://github.com/mgea/gazemapping

* **FireShot**, extensión de Chrome para captura de imágenes de sitios web https://chromewebstore.google.com/detail/take-webpage-screenshots/mcbpblocgmgfnpjjppndjkmgjaogfceg?hl=es

* **SUS tools** Análisis de resultados de escala SUS  https://sus.tools/

* **Lighthouse** extensión de Chrome para accesibildad. https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=es

* **WAVE ** Web Accessibility Evaluation Tools https://wave.webaim.org/

  

## DOCUMENTACIÓN A ENTREGAR

La documentación se AÑADE al repositorio y se sube una copia de respaldo a PRADO los siguientes documentos:

Entregables de la práctica: 

1. Reclutamiento de Usuarios + propuesta del proyecto de experimento A/B  (25%)
1. Resultados del Eye Tracking (25%)
1. Cuestionario SUS y Análisis (25%)
1. Usability Report + conclusiones SUS (25%) 

El fichero se llamará {nombre_equipo}_P4, donde grupo: {DIU1, DIU2, DIU3}  se debe además publicar en GITHUB los resultados. 

El informe de usabilidad de la práctica B: se requiere que este archivo esté público en vuestro Github. Este archivo utilizará el siguiente estilo de nombrado: 

P4_UsabReport_{practB}_doneby_{grupo}_{nombre_equipo}

