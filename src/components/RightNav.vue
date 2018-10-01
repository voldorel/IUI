<template>
  <v-navigation-drawer
    persistant
    :right="true"
    v-model="rightDrawer"
    fixed
    app
    :width="175"
    permanent
  >
    <v-list :style ="{marginTop: '-20px', marginLeft: '-10px'}">
      <v-list-tile>
        <!-- <div :style ="{marginLeft: '-1em', marginTop: }"> -->
        <v-btn flat fab small :style ="{width : '5px', height: '5px'}">
          <div :style ="{marginLeft: '-2em', marginTop: '-0.3em'}">
            <i aria-hidden="true" class="flaticon-edit-tools" :style="{width: '1em', fontSize: '0.013em'}"></i>
          </div>
          </v-btn>
          <v-btn flat fab small :style ="{width : '5px', height: '5px'}">
            <div :style ="{marginLeft: '-2em', marginTop: '-0.3em'}">
              <i aria-hidden="true" class="flaticon-object-alignment-2" :style="{width: '1em', fontSize: '0.013em'}"></i>
            </div>
          </v-btn>
          <v-btn flat fab small :style ="{width : '5px', height: '5px'}">
            <div :style ="{marginLeft: '-2em', marginTop: '-0.3em'}">
              <i aria-hidden="true" class="flaticon-ui" :style="{width: '1em', fontSize: '0.013em'}"></i>
            </div>
          </v-btn>
          <v-btn flat fab small :style ="{width : '5px', height: '5px'}">
            <div :style ="{marginLeft: '-2em', marginTop: '-0.3em'}">
              <i aria-hidden="true" class="flaticon-object-alignment-1" :style="{width: '1em', fontSize: '0.013em'}"></i>
            </div>
          </v-btn>
          <v-btn flat fab small :style ="{width : '5px', height: '5px'}">
            <div :style ="{marginLeft: '-2em', marginTop: '-0.3em'}">
              <i aria-hidden="true" class="flaticon-ui-1" :style="{width: '1em', fontSize: '0.013em'}"></i>
            </div>
          </v-btn>
          <v-btn flat fab small :style ="{width : '5px', height: '5px'}">
            <div :style ="{marginLeft: '-2em', marginTop: '-0.3em'}">
              <i aria-hidden="true" class="flaticon-align" :style="{width: '1em', fontSize: '0.013em'}"></i>
            </div>
          </v-btn>
          <v-btn flat fab small disabled :style ="{width : '5px', height: '5px'}">
            <div :style ="{marginLeft: '-2em', marginTop: '-0.3em'}">
              <i aria-hidden="true" class="flaticon-object-alignment-1" :style="{width: '1em', fontSize: '0.013em'}"></i>
            </div>
          </v-btn>
          <v-btn flat fab small disabled :style ="{width : '5px', height: '5px'}">
            <div :style ="{marginLeft: '-2em', marginTop: '-0.3em'}">
              <i aria-hidden="true" class="flaticon-object-alignment-1" :style="{width: '1em', fontSize: '0.013em'}"></i>
            </div>
          </v-btn>
        <!-- </div> -->
      </v-list-tile>
      <Transform></Transform>
      <v-divider class = 'under'></v-divider>
      <Typography></Typography>
      <v-divider class = 'under'></v-divider>
      <Blending></Blending>
      <v-divider class = 'under'></v-divider>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
import Transform from './property-components/Transform'
import Typography from './property-components/Typography'
import Blending from './property-components/Blending'
export default {
  name: "RightNav",
  data () {
    return {
    }
  }, components: {
    Transform,
    Typography, 
    Blending
  }
}
</script>

<style>
  
  .under {
    margin-bottom: 1em;
  }
  .flaticon-object-alignment::before{
    font-size: 100em !important;
  }
  [class^="flaticon-"]:before, [class*=" flaticon-"]:before, [class^="flaticon-"]:after, [class*=" flaticon-"]:after {
    font-size: 70em !important;

  }

  .v-btn:before {
    opacity: 0.9 !important;
    color: #090C11;
  }
</style>