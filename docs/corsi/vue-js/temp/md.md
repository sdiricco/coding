# 01 Creazione di un componente

```javascript
var App = Vue.component('App', {
  template: `<h1> {{titolo}} <h1>`,
  data(){
    return {titolo: "Salve a tutti"}
  }
})

new Vue({
  el: "#app"
})
```

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Vue.js: esempio gestione eventi</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="app">
      <App></App>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

Usando il backtick, con un paio di estensioni vs code sarà possibile avere poi emmet/uggerimeti vs code

# 02


Usando il `v-once` e `v-bind` che consente il collegamento

```javascript
var App = Vue.component("App", {
  template: `
  <div class="container">
    <h1 v-once> {{titolo}} <h1>
    <p v-bind:style="{color: color}"> paragrafo 1 </p>
  </div>
    `,
  data() {
    return { 
      titolo: "Salve a tutti",
      color: "red",
      user:{
        firstName: 'Mario',
        secondName: 'Rossi',
        getFullName: function() { return this.firstName +  " "  + this.secondName}
      }
   };
  },
});

new Vue({
  el: "#app",
});
```

Si usa sempre la forma abbreviata omettendo `v-bind`

```javascript
var App = Vue.component("App", {
  template: `
  <div class="container">
    <h1 v-once> {{titolo}} <h1>
    <p :style="{color: color}"> paragrafo 1 </p>
  </div>
    `,
  data() {
    return { 
      titolo: "Salve a tutti",
      color: "red",
      user:{
        firstName: 'Mario',
        secondName: 'Rossi',
        getFullName: function() { return this.firstName +  " "  + this.secondName}
      }
   };
  },
});

new Vue({
  el: "#app",
});
```

# aggiungiamo un btn

```javascript
var App = Vue.component("App", {
  template: `
  <div class="container">
    <form>
      <div class="form-group">
        <template v-if="loginType === 'username'">
          <label>Username</label>
          <input key="username" class="form-control" placeholder="Enter your username">
        </template>
        <template v-else>
          <label>Email</label>
          <input key="email" class="form-control" placeholder="Enter your email address">
        </template>
      </div>
    </form>
    <button v-on:click="byUserName()" class="btn btn-primary">Per Username</button>
    <button v-on:click="byEmail()" class="btn btn-primary">Per Email</button>
  </div>`,
  data() {
    return { 
      loginType: "username",
      byUsername(){
        this.loginType = "username"
      },
      byEmail(){
        this.loginType = "email"
      }
   };
  },
});

new Vue({
  el: "#app",
});
```

```html
<!--index.html-->
<!DOCTYPE html>
<html lang="it">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>hello vue</title>
    <!-- CSS only -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div id="app">
      <App></App>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <script src="app.js"></script>
  </body>
</html>
```

Attenzione ad aggiunge l'attributo univoco `key` per far si di ottenere tue campi diversi.

L'alternativa a `v-if` è `v-show` ma attenzione questa va solo ad aggiungere la proprietà `display:none` non toglie l'elemento dal DOM

# MVVM

model view view-model.

E' buona prassi suddividere un applicativo in views e components (riutilizzabili).

Le view sono oggetti gestiti dal sistema di routing. I components sono oggetti utilizzabili più volte ovunque e all'interno di ogni view

# Una simpatica app

```javascript
var App = Vue.component("App", {
  template: `
  <div class="container">
    <product-list></product-list>
  </div>`,
  data() {
    return {};
  },
});

Vue.component("product-list", {
  template: `<div>
  <h2>Elenco prodotti</h2>
  <div>
    <product-box v-for="product in products" :key="product-id" v-bind:item="product"></product-box>
  </div>
</div>
`,
  data() {
    return{
      products:[
        {
          id: 1,
          nome: "Prodotto 1",
          descrizione: "Breve descrizione del prodotto",
          prezzo: 15,
          disp: 100
        },
        {
          id: 2,
          nome: "Prodotto 2",
          descrizione: "Breve descrizione del prodotto",
          prezzo: 5,
          disp: 10
        },
        {
          id: 3,
          nome: "Prodotto 3",
          descrizione: "Breve descrizione del prodotto",
          prezzo: 154,
          disp: 150
        },
        {
          id: 4,
          nome: "Prodotto 4",
          descrizione: "Breve descrizione del prodotto",
          prezzo: 65,
          disp: 170
        },
        {
          id: 5,
          nome: "Prodotto 5",
          descrizione: "Breve descrizione del prodotto",
          prezzo: 75,
          disp: 18
        },
        {
          id: 6,
          nome: "Prodotto 6",
          descrizione: "Breve descrizione del prodotto",
          prezzo: 78,
          disp: 190
        },
      ]
    }
  },
});

Vue.component("product-box", {
  template: `
  <div class="card" style="width: 240px; float: left; margin:16px">
    <img v-bind:src="'https://picsum.photos/200?image=' + item.id" class="card-img-top">
    <div class="card-body">
    <h4 class="card-title">{{ item.nome }}</h4>
    <p class="card-text">{{ item.descrizione }}</p>
    <p class="card-text text-end"><strong>Prezzo £{{item.prezzo}}</strong></p>
    <a href="#" class="btn btn-primary">Dettaglio</a>
    </div>
    
  </div>
  
  `,
  props: ['item'],
});

new Vue({
  el: "#app",
});
```

