# MMM-Temperature
MMM-Temperature

### Install & Configuration ###
___
    cd ~/MagicMirror/modules
    git clone https://github.com/Sieun-Lim/MMM-Temperature.git
    cd MMM-Temperature
    npm install


### ScreenShot ###
___
![temperature-Module](https://user-images.githubusercontent.com/97720335/192957368-6857ddec-1b07-4acd-b21c-9356ecb8270c.png)




### Using the module ###
___
Add it to the modules array in the `config/config.js` file:
```javascript
{
    module: "MMM-Temperature",
    position: "top_left",
    config: {
        foo: "temperature"
    }
},
```
