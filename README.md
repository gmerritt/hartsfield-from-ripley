# Hartsfield

Hartsfield humbly supports UC Berkeley's DataHub.

![Hartsfield, re-imagined as a field of hearts.](src/assets/hEartsfield.png)

## Installation

* Install Python 3.8
* Create your virtual environment (venv)
* Install dependencies

```
pip3 install -r requirements.txt [--upgrade]
```



### Create local configurations

If you plan to use any resources outside localhost, put your configurations in a separately encrypted area:

```
mkdir /Volumes/XYZ/hartsfield_config
export HARTSFIELD_LOCAL_CONFIGS=/Volumes/XYZ/hartsfield_config
```

## Greg does a jam like this from a pair of terminals in VSCode to run this locally:

```
source venv/bin/activate
export HARTSFIELD_LOCAL_CONFIGS=/Users/gregm/rip_hartsfield/hartsfield_config
export HARTSFIELD_ENV=development
venv/bin/python application.py
```
and
```
source venv/bin/activate
export HARTSFIELD_LOCAL_CONFIGS=/Users/gregm/rip_hartsfield/hartsfield_config
export HARTSFIELD_ENV=development
npm run serve-vue
```
