<template>
  <div :style = "{marginTop : '-1em', marginLeft: '-1em'}">
    <v-list-tile>
      <v-card-text class = 'sm-text'>
        X
      </v-card-text>
      <v-card-text class = 'sm-text'>
        Y
      </v-card-text>
    </v-list-tile>
    <v-list-tile :style = "{marginTop : '-2.4em', marginLeft: '1em'}">
      <v-text-field
      
      class = 'caption'
      v-model = "layer.x"
    ></v-text-field>
    <v-text-field
      :style = "{marginLeft: '1em'}"
      v-model="layer.y"
      class = 'caption'
    >
    </v-text-field>
    </v-list-tile>
    <v-list-tile>
      <v-card-text class = 'sm-text'>
        Width
      </v-card-text>
      <v-card-text class = 'sm-text'>
        Height
      </v-card-text>
    </v-list-tile>
    <v-list-tile class = 'input1' :style = "{marginTop : '-2.4em', marginLeft: '1em'}">
      <v-text-field
      v-model="layer.xScale"
      class = 'caption'
    ></v-text-field>
    <v-text-field
      :style = "{marginLeft: '1.1em'}"
      v-model="layer.yScale"
      class = 'caption'
    >
    </v-text-field>
    </v-list-tile>
    <v-list-tile>
      <v-card-text class = 'sm-text'>
        Rotate
      </v-card-text>
      <v-card-text>
        --------
      </v-card-text>
    </v-list-tile>
  </div>
</template>


<script>
export default {
  data () {
    return {
      layer: {
        x : '10px',
        y : '20px',
        xScale : '0.8px',
        yScale : '0.8px'
      }
    }
  }
}
</script>
<style>
  .sm-text {
    font-size: 0.6em;
    color: #88878C;
    /*margin-top: -4.7em;
    margin-left: -1.5em;*/
    z-index: 1;
  }
  .input1 {
    /*margin-left: -0.7em;
    margin-top: -3.4em;*/
  }
  .v-text-field > .v-input__control > .v-input__slot:before, .v-text-field > .v-input__control > .v-input__slot:after {
      content: none;
  }
</style>