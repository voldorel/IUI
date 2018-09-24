<template>
  <div>
    <v-list-tile>
      <v-card-text class = 'sm-text'>
        X
      </v-card-text>
      <v-card-text class = 'sm-text'>
        Y
      </v-card-text>
    </v-list-tile>
    <v-list-tile class = 'input1'>
      <v-text-field
      solo
      flat
      class = 'caption'
      v-model = "layer.x"
    ></v-text-field>
    <v-text-field
      solo
      flat
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
    <v-list-tile class = 'input1'>
      <v-text-field
      solo
      flat  
      v-model="layer.xScale"
      class = 'caption'
    ></v-text-field>
    <v-text-field
      solo
      flat
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
    margin-top: -4.7em;
    margin-left: -1.5em;
    z-index: 1;
  }
  .input1 {
    margin-left: -0.7em;
    margin-top: -3.4em;
  }
</style>