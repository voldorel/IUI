<template>
  <div>
    <v-list-tile>
      <v-text-field
      solo
      flat
      v-model="x"
      class = 'caption'
      :style = "{}"
      label = 'asdasd'
    ></v-text-field>
    <v-text-field
      solo
      flat
      v-model="y"
      class = 'caption'
      :style = "{}"
      label = 'asdasd'
    >
    </v-text-field>
    </v-list-tile>
    <v-list-tile>
      <v-text-field
      solo
      flat  
      v-model="scaleX"
      class = 'caption'
      :style = "{}"
      label = 'asdasd'
      
    ></v-text-field>
    <v-text-field
      solo
      flat
      v-model="scaleY"
      class = 'caption'
      :style = "{}"
      label = 'asdasd'
    >
    </v-text-field>
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
