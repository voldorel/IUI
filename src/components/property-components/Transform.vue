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
      v-model = "xx"
    ></v-text-field>
    <v-text-field
      :style = "{marginLeft: '1.2em', marginTop: '-5em'}"
      v-model="yy"
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
      v-model="ww"
      class = 'caption'
    ></v-text-field>
    <v-text-field
      :style = "{marginLeft: '1.2em', marginTop: '-5.2em'}"
      v-model="hh"
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
        x : '50px',
        y : '20px',
        xScale : '0.8px',
        yScale : '0.8px'
      }
    }
  },
  computed: {
    xx: {
      get() {
        return this.$store.getters.getX;
      },
      set(value) {
        this.$store.commit('setX', {key: "value", value});
      },
    },
    yy: {
      get() {
        return this.$store.getters.getY;
      },
      set(value) {
        this.$store.commit('setY', value);
      },
    },
    hh: {
      get() {
        return this.$store.getters.getH;
      },
      set(value) {
        this.$store.commit('setH', { h: value});
      },
    },
    ww: {
      get() {
        return this.$store.getters.getW;
      },
      set(value) {
        this.$store.commit('setW', value);
      },
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