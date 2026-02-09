
## PRÁCTICA 3: PROTOTIPADO / Mockup

Diseño Interfaces de Usuario, 2026 

Nº Sesiones: 3

[<Volver Guiones Prácticas](./README.md) [alt](https://mgea.github.io/UX_CaseStudy/#/GuionesPracticas/)


## Objetivo:

Creación de un prototipo para prueba del interfaz. En esta fase, se analizarán los elementos de diseño y su organización de la información respecto a la plataforma de implantación (desktop). Aplicación de guías de estilo y patrones de diseño. Uso de librerías de desarrollo de IU (material UI) y **simulación de la interacción** para la evaluación de la funcionalidad. Verificar su adaptación a dispositivos móviles.


## Planteamiento:

En esta vamos a analizar el uso de herramientas para el **diseño del IU en modo WEB/APP**  en Hi-Fi. Para ello usaremos los bocetos de la práctica anterior. Vamos a considerar los siguientes aspectos: 


- Propuesta de **diseño visual** 
- **Diseño y organización del layout** siguiendo estilos  
- Diseño de **System design** (colores, iconos, tipografía y guia de estilos) adecuado para el proyecto, incluyendo componentes 
- Uso de patrones de diseño para componentes. 
- Diseño  mockups con **FIGMA** para crear prototipo 
- Se deberán diseñar todos los bocetos del website (parte del cliente) sin funcionalidad (se podrían simular datos) y publicar en GITHUB (para su evaluación en siguiente práctica) 

* El profesor de prácticas indicará si se opta por modo Web o APP



## Descripción de la práctica:

### 1. [MOODBOARD] Diseño visual 

Definiremos una guía de estilos visual de nuestra propuesta. 

Referencia lectura: [Design Mood. 7 Motives to Create Mood Boards](https://uxplanet.org/design-mood-7-motives-to-create-mood-boards-b81ae36e399f)
	
Se pueden usar herramientas como Figma, [Milanote](http://www.milanote.com/), [Miro](https://miro.com/) o [Excalidraw](https://excalidraw.com/) para crear un lienzo que contiene: imágenes / colores / fuentes ( iconos / logotipos y estilos a aplicar a tu diseño. Podemos hacerlo de modo tradicional o bien con el apoyo de IA usando **Google Mixboard** (https://mixboard.google.com/projects)
Se pueden usar como herramientas de apoyo:  

* Paletton se podrá escoger la paleta de colores ([http://www.paletton.com/](http://www.paletton.com/))         
* Lucide dev (iconos). https://lucide.dev/  y [Figma plugin](https://www.figma.com/es-es/comunidad/plugin/939567362549682242/lucide-icons)  
* Fonts (google) [https://fonts.google.com](https://fonts.google.com) 

El moodboard debe incluir al menos: 

- **Imagen corporativa** que incluya al menos:

  - **Marca** como logotipo / **imagotipo**. Se podria intentar crear un isologo de refuerzo     
  - **UX writing** para crear la voz y el tono de la marca, incluyendo algún **Headline** de ejemplo  

- **Tipografía** para definir el estilo y legibilidad. Se recomienda  dos tipografías: 

  - **Heading Font:** Para los  títulos destacados que definen estilo de diseño (ej. una Serif elegante o una Sans-Serif geométrica).
  - **Body Font:** Una fuente optimizada para lectura en pantalla (muy importante para favorecer legibilidad y criterios de accesibilidad).
  - Incluye fase con tipografia para ver efecto de estilo

-  **Paleta de colores**, haciendo énfasis 

  - colores **primarios** (dominante) y **secundarios** (de acento) 
  - incluye ejemplos de texto sobre fondo para para comprobar contraste.

- **Iconos y símbolos** a utilizar y su estilo

- al menos 4 **imágenes inspiradoras** (con apariencia visual deseada) 

  

<br>


### 2. [LANDING PAGE] mediante Vibe Coding/Design

Diseñar página web de **Onboarding** del proyecto (ya con el estilo de  diseño visual seleccionado). 

Recursos: 
* [UX Case Study: Crafting an Impactful Landing Page](https://medium.com/design-bootcamp/ux-case-study-crafting-an-impactful-landing-page-71459b082b65)
* [The UX behind designing landing pages that convert](https://uxplanet.org/the-ux-behind-designing-landing-pages-that-convert-b302ef745c74)
* [Figma Make](https://www.figma.com/es-es/make/)

La “página de aterrizaje” es un tipo de página promocional (de un solo boceto) que incluye: 

- un título (y subtítulo) que sugerentes/motivadores sobre la propuesta de diseño (aplicando UX writing)
- Algún elemento gráfico de refuerzo (imagen/vídeo) que de fuerza a la idea. Para esta práctica bastaría indicar dónde estaría situado y más o menos qué tipo de contenido aparecería.   
- Detalle de características beneficios de esta propuesta (1-3) y algún refuerzo emocional para hacer la propuesta deseable 
- una acción preferente (CTA) que redirige a la app (el enlace por ahora es irrelevante)

Como está realizada con una herramienta IA (**Figma Make / Google Stitch**), se incluirá algun comentarios acerca del proceso de generación de prompts para obtener resultado 

<br>



### 3. [LENGUAJE VISUAL:  DESIGN SYSTEM]

Creación de un Design System Ligero. En lugar de utilizar frameworks preestablecidos y rígidos  (tipo Material3 de Google) , se optará por un enfoque **Atomic Design** personalizado. Esto garantiza que el prototipo sea ligero, rápido de cargar y  revisar. Para ello se propone el uso de:

- **Recurso recomendado:** (plugin de Figma) [Design System Foundation (Community)](https://www.figma.com/es-es/comunidad/file/1007839545438281461/design-system-foundation).
- Recurso alternativo (plugin Figma para Apps): [Foundation Studio | Design System Generator](https://www.figma.com/community/plugin/1576397531447817254/foundation-studio-design-system-generator)
- Recurso alternativo (Plugin de Figma)  **Deliverrr** https://www.figma.com/community/plugin/1498225713392045680/deliverrr
- **Generación Técnica:** Se utilizará el plugin **Foundation ** para automatizar la creación de variables de color (escalas 50-900), escalas tipográficas modulares y sistemas de espaciado basados en una rejilla de 8px.
- **Design Tokens:** Los estilos se documentarán como tokens (ej: `color-primary-600` o `space-card-padding`) para permitir una integración directa con configuraciones de Tailwind CSS en React.

Los pasos a seguir son: 

##### a) Definición de Foundations (Cimientos del Sistema)

El plugin nos ayudará a definir el lenguaje visual base para garantizar la consistencia y accesibilidad (comprobar contrastes):

- **Sistema de Color:** Generación de rampas cromáticas y tokens semánticos (Primary, Secondary, Neutrals y Feedback).
- **Arquitectura Tipográfica:** Implementación de una escala modular para jerarquías claras (H1-H3, Body, Labels).
- **Grid & Spacing:** Definición de un sistema de espaciado basado en 8px para una retícula móvil adaptable.



##### b) Atomic desig: Componentes y Patrones de IU 

Vamos a diseñar un **Design System ligero** basado en **Atomic Design** donde la clave es la modularidad. Para ello organizaremos los siguientes componentes:

* **átomos** como botones, inputs de formulario, avatares, y tipografía (H1...) 
* **molécular** como barra de búsqueda, list items, cards, tabs de navegacion
* **organismos** como navbar, tab bar, Hero section, Header, footer
* **patrones** como Onboarding, login, article list

Para agilizar diseño, utilizaremos la función de **Figma con variantes** (creando un sólo botón y variabtes para primario/secundario). 

En este paso incluiremos un diseño **con autolayout** para organizar de modo **responsive**



Recursos:

* IxDF (2021). **_What are Design Systems?_**. IxDF - Interaction Design Foundation. https://www.interaction-design.org/literature/topics/design-systems
* UX Planet (2023) **Design System — Fundamental principles for designing and developing a robust Design System** https://uxplanet.org/design-system-fundamental-principles-for-designing-and-developing-a-robust-design-system-2265f2c93627

<br>

### 4. [LAYOUT HI-FI]

Realizar el layout en Figma usando el diseño molecular, para organizar:

- Bienvenida 
- **Layout con jerarquía visual semática**: header, contenido, footer
- Menú navegacion
- Destacado, listas y recomendaciones  
- Búsquedas
- Detalles de contenido 

 

Se deberían usar los componentes de figma para simular los comportamientos de animación y transiciones (en barra de menú, estados de botones…) 
Consejos:  [https://uxdesign.cc/10-figma-best-practices-to-10x-your-workflow-76d6336daf2a](https://uxdesign.cc/10-figma-best-practices-to-10x-your-workflow-76d6336daf2a) 


<br>

### 5. [BRIEFING]

Describe brevemente el proceso llevado a cabo con los puntos fuertes del diseño y principales conclusiones. De debe incidir en las heramientas usadas (IA/tools) y su efectividad para lograr objetivo

<br> 

## DOCUMENTACIÓN A ENTREGAR


La documentación se AÑADE al repositorio y se sube una copia de respaldo a PRADO los siguientes documentos:

- Datos identificativos  del equipo
- Entregables de la práctica: 

* Diseño Visual (15%) 
* Landing Page (20%) 
* Design System (20%)
* Layout+Simulación (40%)
* Briefing explicando proceso de diseño (5%)


El fichero se llamará {nombre_equipo}_P3, se debe además publicar en GITHUB los resultados.

