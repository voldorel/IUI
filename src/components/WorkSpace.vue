<template>
  <v-container>
    <v-layout row wrap>
      <div id = 'scale'>
        <div id = 'view'>
          
        </div>
      </div>
      <v-btn large fab id = 'zoom'>
        <v-icon>zoom_in</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: '',
  props: {
    msg: String
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
  #zoom {
    top: 450px;
    left: 200px;
    z-index: 10
  }
</style>
