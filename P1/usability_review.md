# Usability Review

**Instrucciones:** Usar la plantilla de "UX for the Masses" (enlace en el guion) para evaluar la usabilidad del sitio seleccionado. Se recomienda realizar la revisión con la hoja Excel/PDF proporcionada y luego resumir los resultados aquí.

- Enlace plantilla Excel: http://www.uxforthemasses.com/wp-content/uploads/2011/02/Usability-review-template.xls
- Enlace PDF: https://www.uxforthemasses.com/wp-content/uploads/2011/02/Usability-review-template.pdf

## Resumen cuantitativo
## Revisión de usabilidad — Caso: The Champions Burger (Granada)

En esta revisión rápida se evalúa la landing/ficha local de The Champions Burger para Granada (https://thechampionsburger.es/granada/) y se contrastan observaciones con los competidores Goiko y Sancho Casual Burger.

### Resumen cuantitativo (valoración rápida)
| Criterio | Puntuación (1-5) | Comentarios |
|---|---:|---|
| Visibilidad del estado del sistema | 3 | El sitio muestra contenido dinámico y popups (newsletter) pero no feedback transaccional (no hay flujo de compra claro).
| Correspondencia sistema/mundo real | 4 | Lenguaje cercano y eventos bien explicados (FAQs, galerías).
| Control y libertad del usuario | 3 | Falta de caminos alternativos claros para reservar/pedir desde la ficha.
| Consistencia y estándares | 3 | Estética coherente, pero uso inconsistente de CTAs entre secciones.
| Prevención de errores | 3 | Poca oportunidad de cometer errores en navegación informativa; en caso de formularios, depende de plataformas externas.
| Reconocimiento antes que recuerdo | 3 | Algunos elementos clave (precio, disponibilidad) requieren búsqueda adicional.
| Flexibilidad y eficiencia | 2 | No optimizado para conversión rápida; experiencia dirigida al descubrimiento más que a la compra.
| Diseño estético y minimalista | 4 | Diseño atractivo y visual; buena fotografía y tono editorial.

## Observaciones principales (Top 5 issues)
1. Falta de CTA transaccional claro (Severidad: Alta)
	- Problema: la web promueve eventos y contenidos pero no facilita la acción inmediata (reservar, comprar entradas, pedir). Muchos usuarios buscan conversión.
	- Solución: Añadir botones visibles "Reservar entrada" / "Pedir ahora" o enlaces a plataformas de venta; exponer precios mínimos.

2. Información de precios y menús poco accesible (Severidad: Alta)
	- Problema: la ficha/landing no siempre muestra precios o menú detallado; genera incertidumbre.
	- Solución: Incluir resumen de precios y opción de ver carta/ficha del local con alérgenos.

3. Experiencia móvil con fricciones (Severidad: Media)
	- Problema: popups de newsletter y elementos promocionales ocupan mucho espacio en móvil, dificultando encontrar información principal.
	- Solución: optimizar jerarquía mobile-first, reducir o posponer popups y priorizar CTA principal.

4. Visibilidad de reseñas y prueba social limitada (Severidad: Media)
	- Problema: las reseñas y valoraciones no son prominentes en la primera vista de la ficha.
	- Solución: Mostrar extracto de reseñas y puntuación media cerca del título o CTA.

5. Accesibilidad básica y etiquetas (Severidad: Baja-Media)
	- Problema: contrastes de color y etiquetas alt para imágenes deben revisarse; algunos controles no tienen roles ARIA visibles.
	- Solución: ejecutar un chequeo rápido con Lighthouse/axe y corregir contrastes y etiquetas alt.

## Recomendaciones rápidas de diseño
- Añadir microconversión: botón "Reservar / Comprar" visible en hero.
- Crear ficha de local con: precio medio, horario, dirección, enlace a pedido y resumen de alérgenos.
- Simplificar popups en móvil y priorizar información crítica (horario, ubicación, precio).
- Añadir enlaces directos para compartir y reseñas y un CTA final para registro en newsletter con incentivo (descuento o sorteo).

## Anexos y evidencias
- Incluir capturas de pantalla de la landing, hero, FAQs y cualquier formulario de contacto. Subir versión rellenada del Excel/PDF de la plantilla de usabilidad a `P1/`.


## Observaciones principales
- Listar aquí los problemas prioritarios (top 5) con gravedad estimada y propuesta breve de solución.

## Anexos
- Incluir copia del fichero Excel rellenado (o una exportación a CSV/PDF) en la carpeta `P1/`.
