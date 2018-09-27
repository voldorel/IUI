<template>
  <div :style = "{marginTop : '-1em', marginLeft: '-1em', marginBottom : '-2em'}">
    <v-list-tile>
      <v-card-text class = 'sm-text'>
        X
      </v-card-text>
      <v-card-text class = 'sm-text'>
        Y
      </v-card-text>
    </v-list-tile>
    <v-list-tile>
      <v-text-field
      :style = "{marginLeft: '1.2em', marginTop: '-5em'}"
      class = 'caption'
      v-model = "layer.x"
    ></v-text-field>
    <v-text-field
      :style = "{marginLeft: '1.2em', marginTop: '-5em'}"
      v-model="layer.y"
      class = 'caption'
    >
    </v-text-field>
    </v-list-tile>
    <v-list-tile :style = "{marginTop: '-3em'}">
      <v-card-text class = 'sm-text'>
        Width
      </v-card-text>
      <v-card-text class = 'sm-text'>
        Height
      </v-card-text>
    </v-list-tile>
    <v-list-tile>
      <v-text-field
        :style = "{marginLeft: '1.2em', marginTop: '-5.2em'}"
      v-model="layer.xScale"
      class = 'caption'
    ></v-text-field>
    <v-text-field
      :style = "{marginLeft: '1.2em', marginTop: '-5.2em'}"
      v-model="layer.yScale"
      class = 'caption'
    >
    </v-text-field>
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
    z-index: 1;
  }
  .v-text-field > .v-input__control > .v-input__slot:before, .v-text-field > .v-input__control > .v-input__slot:after {
      content: none;
  }
</style>