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
