<template>
  <v-navigation-drawer
    persistant
    :right="true"
    v-model="rightDrawer"
    fixed
    app
    :width="175"
    permanent
  >
    <v-list :style ="{marginTop: '-20px', marginLeft: '-10px'}">
      <v-list-tile>
        <v-btn flat fab small :style ="{width : '5px', height: '5px'}">
          <v-icon size = '0.8em'>fas fa-align-left</v-icon>
        </v-btn>
        <v-btn flat fab small :style ="{width : '5px', height: '5px'}">
          <v-icon size = '0.8em'>fas fa-align-center</v-icon>
        </v-btn>
        <v-btn flat fab small :style ="{width : '5px', height: '5px'}">
          <v-icon size = '0.8em'>fas fa-align-right</v-icon>
        </v-btn>
        <v-btn flat fab small :style ="{width : '5px', height: '5px'}">
          <v-icon size = '0.8em'>fas fa-sort-amount-down</v-icon>
        </v-btn>
        <v-btn flat fab small :style ="{width : '5px', height: '5px'}">
          <v-icon size = '0.8em'>fas fa-sort-amount-up</v-icon>
        </v-btn>
        <v-btn flat fab small :style ="{width : '5px', height: '5px'}">
          <v-icon size = '0.8em'>fas fa-paragraph</v-icon>
        </v-btn>
        <v-btn flat fab small disabled :style ="{width : '5px', height: '5px'}">
          <v-icon size = '0.8em'>fas fa-pen</v-icon>
        </v-btn>
        <v-btn flat fab small disabled :style ="{width : '5px', height: '5px'}">
          <v-icon size = '0.8em'>fas fa-pen-fancy</v-icon>
        </v-btn>
      </v-list-tile>
      <Transform></Transform>
      <hr class="under">
      <Typography></Typography>
      <hr class="under">
      
    </v-list>

  </v-navigation-drawer>
</template>

<script>
import Transform from './property-components/Transform'
import Typography from './property-components/Typography'
export default {
  name: "RightNav",
  data () {
    return {
    }
  }, components: {
    Transform,
    Typography
  }
}
</script>

<style>
  
  .under {
    margin-bottom: 1em;
  }
</style>