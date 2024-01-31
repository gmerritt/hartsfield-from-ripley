# Hartsfield

Hartsfield humbly supports UC Berkeley's DataHub.

![Hartsfield, re-imagined as a field of hearts.](src/assets/hEartsfield.png)




## To run this locally:

### Install a python 3.11 venv in the project directory, activate it, and install requirements:

```
python3.11 -m venv ./venv
source ./venv/bin/activate
pip install -r requirements.txt
```

### Install npm (the Node.js package manager), adjust the version, install the project dependencies, and do the "audit fix" if it complains that you should do so:

https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

```
npm install -g npm@9.8.1
npm install
npm audit fix
```

### Securely install local configurations with secrets

Put your configurations in a separately encrypted area outside of the project folder, which you will later export to environment variables. Ensure that your uid is in the AUTHORIZED_USERS list within that file.

```
mkdir /Volumes/XYZ/hartsfield_config
```

### Run one terminal session for the python back end...

```
source venv/bin/activate
source .env.development
export HARTSFIELD_LOCAL_CONFIGS=/Volumes/XYZ/hartsfield_config
export HARTSFIELD_ENV=development
venv/bin/python application.py
```
### ...and another terminal session for the Node.js front end:
```
source .env.development
export HARTSFIELD_LOCAL_CONFIGS=/Volumes/XYZ/hartsfield_config
export HARTSFIELD_ENV=development
npm run serve-vue
```

## Using the application

Browse to http://localhost:8080/ -- but note that the first access will take up to several minutes as all of the Node.js stuff does its thing! Subsequent access are fast.

## A diagram of the intended function of the application:

![Diagram of Hartsfield front end, back end, GCP components, and their relationships.](src/assets/2023-10-03_Hartsfield_diagram.png)
