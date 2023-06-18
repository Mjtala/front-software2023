# TeamUp

TeamUp es una aplicación diseñada para facilitar la organización de partidos de fútbol. Sus principales beneficios radican en simplificar la tarea de coordinar estos encuentros y permitir a los usuarios encontrar partidos sin necesidad de conocer previamente a los demás jugadores.

Esta aplicación ofrece diversas ventajas para los usuarios. En primer lugar, simplifica el proceso de organización al proporcionar una plataforma intuitiva y fácil de usar. Los usuarios pueden crear eventos, establecer fechas, horarios y lugares, e invitar a otros jugadores a unirse. Esto elimina la necesidad de realizar múltiples llamadas telefónicas o enviar mensajes individuales para coordinar un partido.

Además, TeamUp permite a los jugadores encontrar partidos sin tener que organizarlos ellos mismos. La aplicación cuenta con una función de búsqueda que muestra los eventos disponibles en un área geográfica determinada. Esto brinda la oportunidad a los usuarios de unirse a partidos donde pueden conocer y jugar con nuevos compañeros, lo que resulta especialmente útil para aquellos que no tienen un grupo estable de jugadores o desean ampliar su red social en el ámbito futbolístico.

En resumen, TeamUp simplifica la organización de partidos de fútbol al proporcionar una plataforma fácil de usar y permite a los usuarios encontrar partidos sin necesidad de conocer a los demás jugadores previamente. Esta aplicación facilita la participación en actividades deportivas y promueve la interacción entre aficionados al fútbol.

## Requisitos previos y ejecución

Para ejecutar el frontend de TeamUp, solo necesitas tener un computador con JavaScript, npm (Node Package Manager) y React instalados. Aquí te indico los pasos generales para asegurarte de que tienes todo lo necesario:

1. Asegúrate de tener Node.js instalado en tu computadora. Puedes verificarlo abriendo la terminal y ejecutando el siguiente comando:

```
node -v
```

Si Node.js no está instalado, puedes descargarlo e instalarlo desde el sitio oficial: [https://nodejs.org/](https://nodejs.org/)


2. Una vez que tienes Node.js, npm debería instalarse automáticamente. Puedes verificarlo ejecutando el siguiente comando en la terminal:

```
npm -v
```

Esto mostrará la versión de npm instalada.

3. A continuación, necesitarás instalar React globalmente en tu computadora. Ejecuta el siguiente comando en la terminal:

```
npm install -g create-react-app
```

Esto instalará Create React App, una herramienta para crear proyectos de React fácilmente.

4. Luego, asegúrate de tener el código fuente de TeamUp en tu computadora. Puedes descargarlo desde el repositorio oficial o clonarlo utilizando Git. Por ejemplo, si tienes Git instalado, puedes ejecutar el siguiente comando en la terminal para clonar el repositorio:

```
https://github.com/Mjtala/front-software2023
```


5. Una vez que tienes el código fuente de TeamUp, ve al directorio del proyecto en la terminal utilizando el comando `cd`. Por ejemplo:

```
cd teamup-frontend
```


6. Dentro del directorio del proyecto, ejecuta el siguiente comando para instalar las dependencias de Node.js necesarias para TeamUp:

```
npm install
```

7. Ahora, es necesario crear un archivo .env, dentro de la carpeta raiz del proyecto. Dicho env debe seguir el siguiente formato:

```
REACT_APP_BACKEND_LOCAL_URL=http://localhost:3000/
REACT_APP_BACKEND_CLOUD_URL={RutaBackend}
REACT_APP_BACKEND_ENV=cloud
```

Es importante mencioanr que para no poner en peligro el backend de la aplicación, en el mail se enviara la ruta del backend que es necesario poner en el .env.


8. Una vez que se hayan instalado todas las dependencias, puedes iniciar el servidor de desarrollo de React con el siguiente comando:

```
npm start
```


9. Esto iniciará el servidor y te mostrará la URL donde puedes acceder a la aplicación TeamUp en tu navegador. Por lo general, será algo como `http://localhost:3000`.

Con estos pasos, deberías poder ejecutar el frontend de TeamUp en tu computadora. Asegúrate de cumplir con los requisitos mencionados y sigue las indicaciones específicas del proyecto si las hubiera.

## Arquitectura del codigo

![Arquitectura](https://github.com/Mjtala/front-software2023/tree/dev/src/assets/ArquiSoftware.png)

## Casos de uso


## Dependencias.

Todas las dependencias del proyecto se instalan automaticamente al hacer el siguiente comando dentro de la carpeta del repositorio:

```
npm install
```

Una vez mencionado eso, a continuación se muestran las dependencias: 

1. "axios": "^1.4.0"
2. "bootstrap": "^5.3.0-alpha3"
3. "mdb-react-ui-kit": "^6.0.0"
4. "@testing-library/jest-dom": "^5.16.5"
5. "@testing-library/react": "^13.4.0"
6. "@testing-library/user-event": "^14.4.3"
7. "react": "^18.2.0"
8. "react-bootstrap": "^2.7.4"
9. "react-dom": "^18.2.0"
10. "react-router-dom": "^6.11.2"
11. "react-scripts": "^5.0.1"
12. "web-vitals": "^3.1.0"

## Rutas.

En esta sección, se proporcionará una explicación detallada de cada una de las rutas en la aplicación:

1.  Ruta de Inicio (/): Esta ruta corresponde a la página de inicio de la aplicación. Es una página independiente que no requiere conectarse con el backend. Su objetivo principal es proporcionar a los usuarios acceso a otros sitios o funciones dentro de la aplicación. Algunas funcionalidades que existen en esta página son:

    Inicio de sesión para jugadores: Los jugadores pueden hacer clic en un enlace o botón para acceder a la página de inicio de sesión. Esto les permitirá ingresar sus credenciales y acceder a su perfil de jugador.

    Inicio de sesión para empresas: Las empresas pueden hacer clic en un enlace o botón para acceder a la página de inicio de sesión específica para ellas. Esto les permitirá ingresar sus credenciales y acceder a su panel de control empresarial.

    Es importante mencionar que en tambien se incluyen las rutas para el registro de ambas entidades.

2. Ruta del Perfil del Jugador (/perfil_jugador): Esta ruta corresponde al perfil del jugador en la aplicación. Esta pagina tiene 3 modals que actuan en ella. Solamente puede haber 1 de los 3 modals activos. Actualmente, se describen los modals:

    a) "Mi información": Esta vista muestra al usuario su información personal, incluyendo detalles como nombre, correo, telefono, entre otros. La información se obtiene directamente del backend de la aplicación y se actualiza según sea necesario.

    b) "Canchas favoritas": Esta vista proporciona al usuario información sobre las canchas de fútbol que ha marcado como favoritas. Se muestran detalles como ubicación y horarios disponibles. La información se sincroniza con el backend de la aplicación para garantizar la precisión de los datos.

    c) "Reservas": En esta vista, el usuario puede ver todas las canchas en las que ha realizado reservas. Se muestra información relevante como fecha, hora, ubicación y otros participantes. Esta vista se actualiza dinámicamente a medida que el backend de la aplicación registra nuevas reservas o cambios en las existentes.

    Es importante destacar que estas tres vistas se conectan directamente al backend de la aplicación para obtener y actualizar la información mostrada al usuario. Esto garantiza que la información se mantenga actualizada y refleje los cambios realizados por el usuario o por otros jugadores.

3.  Ruta del Perfil de la empresa (/perfil_empresa): Esta ruta se refiere al perfil de una empresa en la aplicación. La página incluye tres modales que interactúan con ella. Solo puede haber uno de los tres modales activo a la vez. A continuación se describen los modales actualmente disponibles:

    a) "Información": Esta vista presenta al usuario su información personal, que incluye detalles como correo electrónico, teléfono, ubicación, entre otros. La información se obtiene directamente del backend de la aplicación y se actualiza según sea necesario.

    b) "Mis canchas": En esta vista, la empresa puede acceder a la información asociada a todas las canchas que le pertenecen. Se muestran detalles como la ubicación, el precio, el nombre, entre otros. Esta vista se actualiza dinámicamente a medida que el backend de la aplicación actualiza la información asociada.

    c) "Subir Canchas": En esta vista, la empresa puede completar un formulario que le permite subir una nueva cancha a la aplicación. El formulario solicita a la empresa información relevante sobre la cancha que se desea agregar. Posteriormente, esta información se envía al backend para que se agregue a la base de datos de la plataforma.

4. Buscador de canchas ("/buscar_cancha"): Esta ruta presenta un buscador que permite al usuario buscar una cancha específica. Actualmente, el buscador no cuenta con ningún filtro, pero le permite al usuario buscar una cantidad determinada de canchas ingresada por él mismo. Al igual que otras secciones de la pagina, esta vista se comunica con el backend de la aplicación, para obtener la información solicitada por el usuario. 

    La página solicita al usuario dos campos de entrada: "página" y "canchas por página". El primero de ellos corresponde a la página del paginado de canchas, y el segundo corresponde al número de canchas que se mostrarán en cada página. Una vez el usuario ingresa estos inputs, se le envian al backend para recuperar la cantidad deseada de canchas. 

5. Cancha particular ("/canchas/{name}"): Esta ruta muestra al usuario la información de una cancha específica. La cancha se determina a través del parámetro "name" en la URL, que corresponde al nombre de la cancha que se desea ver. Al igual que otras secciones de la página, esta vista se comunica con el backend de la aplicación para obtener la información de la cancha solicitada. La solicitud se envía al acceder a la página, por lo tanto, es necesario que el valor de "name" en la URL coincida con el nombre de una cancha registrada en la base de datos.

    Una vez que la solicitud ha sido enviada y aceptada, la página muestra la información de la cancha asociada. Además, se muestra un botón para ver los horarios disponibles de dicha cancha. Al hacer clic en este botón, los horarios se muestran o se ocultan según su visibilidad actual.

6. Iniciar sesión como jugador ("/LoginJugador"): Esta ruta corresponde a la pagina que le permite al usuario iniciar sesión como jugador.


7. Iniciar sesión como empresa ("/LoginEmpresa"): Esta ruta corresponde a la pagina que le permite al usuario iniciar sesión como empresa.


8. Iniciar sesión como empresa ("/ChooseUser"): Esta ruta le permite al usuario decidir si iniciar sesión como jugador o como empresa. Esta pagina es simplemente una pagina redireccional, o sea, solamente redirecciona.  


9. Iniciar sesión como empresa ("/ChooseAccount"): Esta ruta le permite al usuario decidir si registrarse como jugador o como empresa. Esta pagina es simplemente una pagina redireccional, o sea, solamente redirecciona. 


10. Registrarse como empresa ("/SignUpJugador"): Esta ruta corresponde a la pagina que le permite al usuario registrarse como jugador.


11. Registrarse como empresa ("/SignUpEmpresa"): Esta ruta corresponde a la pagina que le permite al usuario registrarse como empresa.