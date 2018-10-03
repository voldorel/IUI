<template>
  <v-navigation-drawer
    persistant
    :right="true"
    v-model="rightDrawer"
    fixed
    app
    :width="drawerWidth"
    permanent
  >
    <v-list :style ="{marginTop: '-1.6  em'}">
      <NavOptions></NavOptions>
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
import Transform from '../property-components/Transform'
import Typography from '../property-components/Typography'
import Blending from '../property-components/Blending'
import NavOptions from './NavOptions'
export default {
  name: "RightNav",
  data () {
    return {
    }
  },
    components: {
    Transform,
    Typography, 
    Blending,
    NavOptions
  },
    computed:{
        drawerWidth(){
            let width =  190;
            // width = Math.max(width, 150);
            // width = Math.min(width, 300);
            return width;
        }
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

  button.v-btn.v-btn--active.theme--dark {
    color: #3A9AFC;
  }

</style>