<template>
  <div :style = "{marginBottom: '-3.4em'}">
    <v-list-tile>
      <v-card-text class = 'small-text' :style = "{marginTop : '-4.2em', marginLeft : '-1.2em'}">
        Blending
      </v-card-text>
      <v-card-text>
        <v-menu offset-y :style = "{marginTop : '-3.3em', marginLeft : '-2.7em'}">
          <v-btn flat slot="activator" class ='caption'>Normal
            <div>
              <v-icon
              size = '0.7em'
              left="true"
              >
                fas fa-sort-down
              </v-icon>
            </div>
          </v-btn>
          <v-list>
            <!-- <v-list-tile v-for="item in items" :key="item.key" @click="callback">
              <v-list-tile-title>{{ item.key }}</v-list-tile-title>
            </v-list-tile> -->
          </v-list>
        </v-menu>
      </v-card-text>
    </v-list-tile>
    <v-list-tile>
      <v-card-text class = 'small-text' :style = "{marginTop : '-8.2em', marginLeft : '-1.2em'}">
        Opacity
      </v-card-text>
      <v-card-text>
        <v-slider
          v-model="slider"
          :style = "{marginTop : '-3.5em', marginLeft : '-1.2em'}"
        ></v-slider>
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
      },
      slider : 45
    }
  }
}
</script>
<style>
  .small-text {
    font-size: 0.7em;
    color: #88878C;
    z-index: 1;
  }
  .sm-text {
  }
  .v-slider__thumb {
    width: 1em;
    height: 1em;

  }
</style>