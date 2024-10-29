# Bandit 0

El objetivo es entrar por SSH y leer un archivo "readme"

Host -  bandit.labs.overthewire.org
Puerto - 2220
Usuario - bandit0
contraseña - bandit0

Para entrar por SSH debemos mandar:

```bash
ssh usuario@direccion
```

si queremos entrar por otro puerto aparte del default:

```bash
ssh usuario@direccion
-p 1234
```

para resolver el nivel:

```bash
ssh bandit0@bandit.labs.overthewire.org -p 2200
# introducir la contraseña bandit0 para entrar

# la contraseña esta en /home/ bandit0/readme

```
