<template>
  <div>
    <v-list-tile>
      <v-spacer></v-spacer>
      <strong>
        TRANSFORM
      </strong>
      <v-spacer></v-spacer>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>transform</v-icon>
      </v-list-tile-action>
      <v-text-field
      v-model="x"
      label="X"
      
    ></v-text-field>
    <v-text-field
      v-model="y"
      label="Y"
    >
    </v-text-field>
    </v-list-tile>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>zoom_out_map</v-icon>
      </v-list-tile-action>
      <v-text-field
      v-model="scaleX"
      label="scale X"
      
    ></v-text-field>
    <v-text-field
      v-model="scaleY"
      label="scale Y"
    >
    </v-text-field>
    </v-list-tile>
    <v-list-tile>
    </v-list-tile>
  </div>
</template>


<script>
export default {
  data () {
    return {
    }
  }
}
</script>
