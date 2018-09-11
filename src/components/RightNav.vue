<template>
  <v-navigation-drawer
    persistant
    :right="true"
    v-model="rightDrawer"
    fixed
    app
    :width="250"
    permanent
  >
    <v-list>
      <v-list-tile>
        <v-flex xs12 sm6 class="py-2">
        <v-btn-toggle v-model="toggle_one" mandatory>
          <v-btn flat>
            <v-icon>format_align_left</v-icon>
          </v-btn>
          <v-btn flat>
            <v-icon>format_align_center</v-icon>
          </v-btn>
          <v-btn flat>
            <v-icon>format_align_right</v-icon>
          </v-btn>
          <v-btn flat>
            <v-icon>format_align_justify</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-flex>
      </v-list-tile>
      
      <hr>

      <v-list-tile>
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
      <hr>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
export default {
  name: "RightNav",
  data () {
    return {
      
    }
  }
}
</script>
