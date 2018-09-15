<template>
  <v-app dark>
    <LeftNav></LeftNav>
    <v-content>
      <work-space></work-space>
      <Login></Login>
    </v-content>
    <right-nav></right-nav>
  </v-app>
</template>

<script>
import WorkSpace from './components/WorkSpace/WorkSpace'
import RightNav from './components/RightNav'
import LeftNav from './components/LeftNav/LeftNav'
import Login from './components/pop-up/Login'

export default {
  name: 'App',
  components: {
      'work-space' : WorkSpace,
      'right-nav' : RightNav,
      LeftNav,
      Login
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