# Electron

## Come aggiungere risorse esterne ad un applicativo electron

In `vue.js` dovrai creare nella root del progetto un file `vue.config.js` 

```javascript
//vue.config.js
module.exports = {
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        "productName": 'App Title',
        "extraResources": [
          {
            "from": "./src/extra-resources/",
            "to": "extra-resources",
            "filter": [
              "**/*"
            ]
          }
        ]
      }
    }
  }
}
```

Dopodichè nel file **main** di electron, in questo caso il mio si chiama `background`, potrai accedere a queste risorse tramite `app.getPath("exe")`

```javascript
const APP_PATH = app.getPath("exe");
const APP_DIRECTORY_PATH = path.dirname(APP_PATH);

const VBR_CLI_PATH_DEV = "./src/extra-resources/vbr_cli_interface/vbr_cli.py";
const VBR_CLI_PATH_PROD = path.join(APP_DIRECTORY_PATH, "resources/vbr_cli_interface/vbr_cli.py");

const isDev = process.env.NODE_ENV !== "production";
const vbr_cli = isDev ? VBR_CLI_PATH_DEV : VBR_CLI_PATH_PROD
```

