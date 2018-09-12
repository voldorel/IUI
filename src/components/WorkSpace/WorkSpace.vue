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
    >
        <Tools></Tools>
        
          

        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <h1>UX Designer</h1>
        <v-spacer></v-spacer>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-btn flat fab small>
          <v-icon>fas fa-play</v-icon>
        </v-btn>
        <v-btn flat fab small>
          <v-icon>fas fa-file-export</v-icon>
        </v-btn>
    </v-toolbar>
  </v-container>
</template>
<script>
import Tools from './Tools'
export default {
  name: '',
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
