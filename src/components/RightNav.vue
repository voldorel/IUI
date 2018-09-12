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
              <v-icon>fas fa-align-left</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>fas fa-align-center</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>fas fa-align-right</v-icon>
            </v-btn>
            <v-btn flat>
              <v-icon>fas fa-align-justify</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-flex>
      </v-list-tile>
      
      <hr>
      <Transform></Transform>
      <hr>
      <Transform></Transform>
      <hr>
      <Transform></Transform>
      <hr>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
import Transform from './property-components/Transform'
export default {
  name: "RightNav",
  data () {
    return {
      Transform
    }
  }, components: {
    Transform
  }
}
</script>
