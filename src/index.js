import Grid from './Grid.vue'
import GridItem from "./GridItem.vue";

export default {
  install (Vue) {
    Vue.component('Grid', Grid)
    Vue.component('GridItem', GridItem)
  }
}
