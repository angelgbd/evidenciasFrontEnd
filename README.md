1. Crear el proyecto
       Segui los pasos en clase para crear el proyecto, no tengo prueba directa de la terminal pero puedo explicar los pasos que recuerdo, primero se instalaba node LTS, de ahi se installaba node con npm y typescript npm, segui los pasos de la presentacion
2. Escribir el problema en javasricpt
       <img width="1310" height="662" alt="image" src="https://github.com/user-attachments/assets/74804597-ef14-4ba6-942b-c3f5d86c95f2" />
       Al escribir el codigo en javascript el prinicipal problema fue que el resultaba daba 35050 en vez de 400 debi a que se junto un string con un numero normal
3. Anotar el Tipo
       <img width="630" height="700" alt="image" src="https://github.com/user-attachments/assets/93e0f2a9-9bfe-41c5-9680-eb005a66c322" />
       Por que node no entiende Typescript, a node le llega el codigo siendo javascrip y lo ejecuta normalmente por lo que se suma normalmente sin la interfaz y da 300
4. Declarar variable
       <img width="1228" height="795" alt="image" src="https://github.com/user-attachments/assets/c742f36c-27fc-4c44-858e-d1a62549609e" />
       Al declarar una constante no se puede cambiar despues, su referencia en memoria es inmutable basicamente.
       con "let" si te deja reasignarla siempre y cuando el valor nuevo siga siendo el mismo tipo, si es por ejemplo de un number a un string ya no dejaria a noser que que haya uniones de tipos como por ejemplo esto: let valor: number | string = 10;
       por ultimo al declarar un objeto con const y cambiar la propiedad es valido pero no se puede cambiar el objeto completo da error en compilacion
5.

