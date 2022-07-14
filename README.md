# testimonios

Esta app web renderiza atraves del componente <Testimonio />.

Funcionamiento:

``` 1º usuarios.js contiene UN ARRAY de objetos(con sus propiedades correspondientes donde se guardan strings con la informacion).

2º App.js importa usuarios.js y atraves de un map() recorre cada objeto y devuelve ese objeto (OJO! EL FOREACH NO DEVUELVE EL OBJETO! POR ESO SE USA EL map() ) , y por      cada objeto hace un componente <Testimonio /> y envia a ese componente el OBJETO devuelto.

3º El componente <Testimonio /> desestructura el OBJETO recibido asi:     const { imag, nombre, cargo, testimonio, pais } = objUsuario; para poder usar cada variable
     en su elemento correspondiente para sacar por pantalla la informacion que contiene. ```
     

