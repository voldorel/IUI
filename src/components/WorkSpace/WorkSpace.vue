<template>
  <v-container>
    <v-layout row wrap>
      <div id = 'scale'>
        <div id = 'view'>
          
        </div>
      </div>
    </v-layout>
    <v-toolbar
      app
      flat
      height = '32em'
    >
        <Tools></Tools>
        
        <v-card-text :style = "{marginLeft: '-2em', width : '50em'}">
          <v-container fluid>
            <v-layout row wrap>
              <v-flex xs12 sm1>
                <v-select
                  :items="zoomOptions"
                  item-text="zoom"
                  item-value="id"
                  autocomplete
                  class = 'caption'
                  placeholder = '100%'
                  
                  :style = "{width : '6em'}"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        
          
        <v-card-text>
          <h3 class="caption">My Project</h3>
        </v-card-text>
        
        <v-card-text>
          <div :style="{marginRight: '-1.5em'}">
            <v-btn flat fab small :style = "{width : '0.5em'}">
              <v-icon size = '0.8em'>fas fa-play</v-icon>
            </v-btn>
            <v-btn flat fab small :style = "{width : '0.5em'}">
              <v-icon size = '0.8em'>fas fa-file-export</v-icon>
            </v-btn>
          </div>
        </v-card-text>
    </v-toolbar>
  </v-container>
</template>
<script>
import Tools from './Tools'
export default {
  data: () => ({
    zoom: 100,
    zoomOptions: ['12%', '25%', '50%', '100%', '200%']
  }),
  props: {
    msg: String
  }
  ,components:{
    Tools
  }
}
</script>
<style>
  #view {
    width: 300px;
    height: 500px;
    background-color: white;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0; 
    top: 40px;
  }
</style>
