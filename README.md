## ¡Bienvenido a la Gambeta!
Este es un proyecto realizado en el curso **Proyecto Proffesional Web Master 2020** dictado por la **Universidad Tecnológica Nacional Regional Buenos Aires**

## Características Técnicas

Este proyecto se ejecuta utilizando los  siguientes **software** :

- Oracle VM VirtualBox :https://www.virtualbox.org/wiki/Downloads
- Debian 10 **buster**: https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/
  > **Nota:** La elección de imagen en  **La Gambeta** es **debian-10.4.0-amd64-netinst.iso**

- DBeaver: https://dbeaver.io/download/publish 
- Bitvise SSH Client : https://www.bitvise.com/ssh-client-download

# Comandos en virtual-box

Salir del modo reesclado :    ctrl-der+c

## Instalacion de UFW 
Para habilitar configurar UFW o Uncomplicated Firewall ejecutando los siguientes comandos usando el gestor apt:

> apt install ufw

Para saber la version instalada se ejecuta el siguiente comando

> ufw --version

Habilitar conexiones SSH

> ufw allow ssh

Habilitar conexion HTTP

> ufw allow http

Habilitar conexion HTTPS

> ufw allow https

Habilitar conexion con el puerto mysql 

> ufw allow 3306/tcp

Habilitar UFW 

> ufw enable


Revisamos los puertos habilitados

> ufw status verbose



## Virtual Box reenvio de puertos

Cuando tenemos que acceder a determinados servicios internos de nuestra VM (máquina virtual) desde nuestro ordenador (host) debemos configurar las siguientes reglas:

|      nombre    |    protocolo   |  anfitrion    |    invitado  |
|----------------|----------------|---------------|--------------|
|     HTTP       |        TCP     |    8080       |    80        |
|     SSH        |        TCP     |    2222       |    22        |





## Instalacion de OpenSSH Server on Debian 10

Para instalar un servidor SSH en Debian 10, se deben ejecutar los siguientes comandos:

> apt-get install openssh-server

Puede verificar el estado del servicio SSH se debe ejecutar el siguiente comando:

> systemctl status ssh

Para iniciar el servicio SSH en el arranque, ejecute el siguiente comando:

> systemctl enable ssh

Reiniciar el servici SSH  para aplicar cambios 

>  systemctl restart ssh

## Permitir el root login SSH

Para habilitar el inicio de sesión SSH para un usuario root en el sistema Debian Linux, primero debe configurar el servidor SSH. Para ello debemos  ir hacia la siguiente ruta /etc/ssh/sshd_config y modificar la siguiente linea:

> ##PermitRootLogin without-password

 por 
 
> PermitRootLogin yes

Se debe guardar los cambios 

Finalmente se debe reiniciar el servidor SSH

>  systemctl restart ssh

## Instalación de Apache Server en Debian 10
Apache es un servicio http , el cual instalaremos mediante el siguiente comando 

 > apt -y install apache2
 
 Para comprobar el estado del servicio http apace se debe ejecutar el siguiente comando:
 
 > systemctl status apache2
 
 Para iniciar el servicio Apache en el arranque, ejecute el siguiente comando:

> systemctl enable apache2


# Instalacion de  Git

Git es una herramienta de versionado que se instala con el siguiente comando:

> apt install git

Confirmar la versión instalada de git 

> git --version


## Instalación de nodejs en debian 10

Primero actualizamos el administradror de paquetes apt con el siguiente comando

> apt update

Segundo ejecutamos el siguiente comando para instalar nodejs

> apt install nodejs npm

verificamos la versión de nodejs

> node -v

 > **Nota:** La versión por defecto es v10

## Instalacion de herramientas de desarrollo

apt install build-essential curl

Para actualizar la vesion de nodejs a LTS 12 se debe ejecutar los siguientes comandos:
> apt install build-essential curl

A continuacion la siguiente instrucción:

> curl -sL https://deb.nodesource.com/setup_12.x | -E bash -

## Instalación de  MySQL on Debian 10 Linux 

Para instalar MYSQL en debian 10 debemos usar el comando wget:

> wget http://repo.mysql.com/mysql-apt-config_0.8.13-1_all.deb

Después debemos ejecutar el siguiente comando :

> apt install ./mysql-apt-config_0.8.13-1_all.deb

> **Nota:** Se abrirá una terminal donde debemos elegir MySQL Server & Cluster (Currently selected: mysql-8.0)
 
 Ahora necesitamos actualizar el  package y para ello debemos ejecutar la siguiente instruccion:
 
> apt update

Finalmente procedemos a instalar el servidor mysql:

> apt install mysql-server

Verificamos la instalación de MYSQL 

>  systemctl status mysql
 
## creación de un usuario administrador

Primero debemos ingresar como usuario root 

> mysql -u root -p

 Despué crearemos un usuario indicando la contraseña que queramos:
 
 > create user usuario identified by 'contraseña';
 
 A continuación, otorgamos permisos a este nuevo usuario sobre todas las bases de datos:
 
 > grant all privileges on *.* to chacho with grant option;
 
 Actualizamos la tabla de permisos;
 
> flush privileges;

 Salimos de MYSQL
 
 > exit
 
 






