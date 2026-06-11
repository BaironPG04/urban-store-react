Análisis de referente: Trello

Trello es una aplicación web de gestión de proyectos basada en tableros Kanban, accesible desde https://trello.com. Su interfaz permite organizar tareas mediante listas y tarjetas que representan diferentes estados de un flujo de trabajo como “Pendiente”, “En progreso” y “Finalizado”.

Para el análisis del referente se utilizó la herramienta Wappalyzer como apoyo para identificar tecnologías y tipo de aplicación. Trello es una aplicación web del tipo SPA (Single Page Application), lo que significa que su funcionamiento principal se basa en la actualización dinámica de componentes sin recargar la página completa. Este tipo de arquitectura es común en aplicaciones modernas construidas con frameworks de JavaScript.

La interfaz de Trello está compuesta por tableros, listas y tarjetas. Cada tarjeta representa un elemento interactivo que puede contener información, etiquetas, fechas y comentarios. El usuario interactúa mediante acciones como clic, arrastre y edición en tiempo real.

El patrón interactivo principal es el drag and drop, que permite mover tarjetas entre columnas. Por ejemplo, una tarea puede pasar de “Pendiente” a “En proceso” simplemente arrastrándola con el mouse. Esta acción no recarga la página, sino que actualiza el estado interno de la aplicación.

Cuando el usuario realiza esta interacción, el sistema actualiza automáticamente la posición de la tarjeta y su estado dentro del tablero. Los cambios se reflejan inmediatamente en la interfaz sin necesidad de recargar la página.

Este comportamiento ocurre gracias al manejo de estado en tiempo real, donde solo se actualizan los componentes afectados.

En el proyecto Urban Store se aplica el mismo principio, ya que al agregar productos al carrito, la interfaz se actualiza sin recargar la página. El contador del carrito, el drawer lateral y el subtotal cambian automáticamente según el estado de la aplicación.

En conclusión, Trello es un ejemplo claro de interfaz dinámica basada en estado, y este mismo concepto fue implementado en Urban Store utilizando React y Context API.