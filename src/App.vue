<template>
  <v-app dark>
    <LeftNav></LeftNav>
    <v-content>
      <work-space></work-space>
    </v-content>

    <right-nav></right-nav>
  </v-app>
</template>

<script>
import WorkSpace from './components/WorkSpace/WorkSpace'
import RightNav from './components/RightNav'
import LeftNav from './components/LeftNav/LeftNav'

export default {
  name: 'App',
  components: {
      'work-space' : WorkSpace,
      'right-nav' : RightNav,
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