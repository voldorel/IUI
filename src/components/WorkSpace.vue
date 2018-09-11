<template>
  <v-container>
    <v-layout row wrap>
      <div>
        <div id = 'wrapped-content'>
          
        </div>
      </div>
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
  #wrapped-content {
    width: 500px;
    height: 500px;
    background-color: white;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0; 
  }
</style>
