# la-gambeta-node
Proyecto Proffesional Web Master 2020

# Comandos en virtual-box

Salir del modo reesclado :    ctrl-der+c


# Instalación de node en debian 10

-actualizamos el gestor de paquetes de Debian 10

apt update

-instalamos node js 

apt install nodejs npm


# Instalacion de herramientas de desarrollo

apt install build-essential curl


sudo apt update
sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -


# Instalacion de  Git


$ apt install git

Confirmar la versión instalada de git 

$ git --version


# Revisar puertos abiertos con nmap

apt install nmap

o instalamos netstat

apt-get install net-tools



# Abrir puertos con UFW
1° intalamos con el siguiente comando

apt -y install ufw

2° Abrimos los puertos ssh,http y https

ufw allow ssh
ufw allow http
ufw allow https

3°



4° Revisamos los puertos habilitados

ufw status verbose





# Enlances 
https://linuxize.com/post/how-to-install-node-js-on-debian-10/
