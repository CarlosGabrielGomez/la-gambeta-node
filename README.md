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


## Instalación de node en debian 10


## Instalacion de herramientas de desarrollo

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
