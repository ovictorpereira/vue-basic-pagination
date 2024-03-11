# vue-basic-pagination
A Basic Vue.js pagination component. (**Compatible with Vue.js 3**)

## Installation
NPM
```bash
$ npm install vue-basic-pagination
``` 
Register the component
```js
import { createApp } from 'vue'
import App from './App.vue'

import VueBasicPagination from 'vue-basic-pagination'

createApp(App)
.use(VueBasicPagination)
.mount('#app')

``` 

## Usage
```html
<VueBasicPagination :total-rows="100" :per-page="10" v-model="currentPage" />
```
```js
// COMPOSITION API
import { ref } from 'vue'
setup () {
    const currentPage = ref(1)
    return {
        currentPage
    }
}
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