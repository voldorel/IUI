<template>
  <v-app dark>
    <LeftNav></LeftNav>
    <v-content>
      <work-space></work-space>
    </v-content>
    <v-toolbar
      app
    >
        <Tools></Tools>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <h1>UX Designer</h1>
        <span style="color : #576769">‌ pro</span>
        <v-spacer></v-spacer>
        </v-card-text>
        <v-spacer></v-spacer>
        <v-btn flat fab small>
          <v-icon>fas fa-play</v-icon>
        </v-btn>
        <v-btn flat fab small>
          <v-icon>fas fa-file-export</v-icon>
        </v-btn>
    </v-toolbar>
    <right-nav></right-nav>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import WorkSpace from './components/WorkSpace'
import Tools from './components/Tools'
import RightNav from './components/RightNav'
import LeftNav from './components/LeftNav/LeftNav'

export default {
  name: 'App',
  components: {
      HelloWorld,
      'work-space' : WorkSpace,
      'right-nav' : RightNav,
      Tools,
      LeftNav
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      Layers: [{

      }],
      selected: {
        x : 0,
        y: 0,
        scaleX: 1,
        scaleY: 1
      }
    }
  }
}
</script>