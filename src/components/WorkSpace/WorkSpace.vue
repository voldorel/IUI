<template>
  <v-container>
    <v-layout row wrap>
      <div id = 'container'>
        <div id = 'zoom'>
          <div id = 'underlay' @click= "Create($event)" ref = 'zoom'>
          </div>
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
                  
                  :style = "{width : '6em', top: '0.7em'}"
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
import Vue from 'vue'
import Tools from './Tools'
import Cube from './objects/cube'
import Artboard from './objects/Artboard'
import VueDraggableResizable from 'vue-draggable-resizable'
export default {
  data: () => ({
    createMode: true,
    idCounter: 0,
    selectedId: 0,
    zoom: 100,
    zoomOptions: ['12%', '25%', '50%', '100%', '200%'],
    bgc: {
      backgroundColor: ''
    },
    children: [],
    counter: 0
  }),
  methods: {

    Create: function(e) {
      if (this.createMode) {
        var ComponentClass = Vue.extend(Artboard)
        var instance = new ComponentClass({
          data :{
            x: e.clientX - 203,
            y: e.clientY - 31
          }
        })
        instance.$mount()
        var t = this.idCounter.toString();
        var tid = '#' + t;
        this.idCounter++;
        instance.$el.id = t;
        this.$refs.zoom.appendChild(instance.$el)
        $(tid).css({"background-color": "#ccc",
            "left": e.clientX - 203,
            "top": e.clientY - 31
            }
          );
        this.createMode = false;
      }
    }
  },
  props: {
    msg: String
  }
  ,components:{
    Tools,
    Cube,
    'vue-draggable-resizable': VueDraggableResizable,
  }
}
</script>
<style>
  .app-board {
    width: 220px;
    height: 430px;
    background: #6622aa; /* Old browsers */
    background: -moz-linear-gradient(top, #6622aa 0%, #2989d8 50%, #207cca 51%, #a96cc9 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(top, #6622aa 0%,#2989d8 50%,#207cca 51%,#a96cc9 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to bottom, #6622aa 0%,#2989d8 50%,#207cca 51%,#a96cc9 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    left: 0;
    right: 0; 
  }
  #underlay {
    /*background-color: white;*/
    position:fixed;
    
    width: 100%;
    height: 100%;
  }
  #zoom {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 110px;
    padding:0;
    margin:0;
    top:0;
    left:0;
  }
</style>
