<template>
  <v-container>
    <v-layout row wrap>
      <div id = 'scale'>
        <div class = 'view' :style="{left: '-600px'}">
        </div>
        <div class = 'view'>  
        </div>
        <div class = 'view' :style="{left: '600px'}">
        </div>
      </div>
    </v-layout>
    <v-toolbar
      app
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
        
          
        <v-card-text class="text-xs-center">
          <h3 class="caption">My Project</h3>
        </v-card-text>
        
        <v-card-text class="text-xs-right">
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
  .view {
    width: 250px;
    height: 430px;
    background: #6622aa; /* Old browsers */
    background: -moz-linear-gradient(top, #6622aa 0%, #2989d8 50%, #207cca 51%, #a96cc9 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #6622aa 0%,#2989d8 50%,#207cca 51%,#a96cc9 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #6622aa 0%,#2989d8 50%,#207cca 51%,#a96cc9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0; 
    top: 110px;
  }
</style>
