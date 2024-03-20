# vue-basic-pagination
A Basic Vue.js pagination component. (**Compatible with Vue.js 3**)

## Installation
NPM
```bash
$ npm install vue-basic-pagination
``` 
Register the component globally...
```js
import { createApp } from 'vue'
import App from './App.vue'

import { VueBasicPagination } from 'vue-basic-pagination';
import 'vue-basic-pagination/dist/style.css'
// don't forget to load the css file

createApp(App)
.component('VueBasicPagination', VueBasicPagination)
.mount('#app')
``` 

... or import it locally
```js
<script setup>
import { VueBasicPagination } from 'vue-basic-pagination';
import 'vue-basic-pagination/dist/style.css'
</script>
``` 

## Usage
```html
<VueBasicPagination :total-rows="totalRows" :per-page="perPage" v-model="currentPage" />
```
```js
<script setup>
import { ref } from 'vue'

const totalRows = ref(100)
const perPage = ref(10)
const currentPage = ref(1)
</script>
```

## Available props

| Prop        | Type             | Default                |                     
|-------------|------------------|------------------------|
| totalRows   | Number           | 1                      |                                                 
| perPage     | Number           | 1                      |                                                  
| prevBtn     | String           | ‹                      |                                                 
| nextBtn     | String           | ›                      |                                                  
| firstBtn    | String           |  «                     |                                                
| lastBtn     | String           |  »                     |                                                 
| small       | Boolean          | false                  | 


## Events
| Event    |  Description |
|----------|--------------|
| change     |  Triggers when you select any page       |