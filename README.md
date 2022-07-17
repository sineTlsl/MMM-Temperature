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
![MMM-Test3](https://user-images.githubusercontent.com/97720335/170534182-83f1ccef-79d0-4675-b0c9-8ee12f6dfb78.png)




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
