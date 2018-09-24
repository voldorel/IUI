<template>
  <div>
    <v-list-tile>
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
    
  </div>
</template>


<script>
export default {
  data () {
    return {
      layer: {
        x : 10,
        y : 20,
        xScale : 0.8,
        yScale : 0.8
      }
    }
  }
}
</script>
