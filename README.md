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



![20220529_021258](https://user-images.githubusercontent.com/97720335/170835713-ad61e29b-1fb4-4022-8a2e-a5d7875144cd.png)

![20220529_021045](https://user-images.githubusercontent.com/97720335/170835638-a03a6e9c-337a-47ee-b2f0-fc9973ef03ef.png)

![2022-05-29-004036_1080x1920_scrot](https://user-images.githubusercontent.com/97720335/170835643-8c004565-e38d-4d07-9071-b3428daaae44.png)

![2022-05-29-014813_1080x1920_scrot](https://user-images.githubusercontent.com/97720335/170835645-5a62b0b8-a428-47c3-aa41-d8dcc2c6e4db.png)



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
