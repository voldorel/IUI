<template>
  <v-app dark>
        
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
      :width="210"
      permanent
      class="pa-0"
    >
      <v-list>

        <v-list-tile>
            <v-tabs
                    align-with-title>
                <v-tab
                        v-for="n in 3"
                        :key="n"
                >
                    Item {{ n }}
                </v-tab>
            </v-tabs>
        </v-list-tile>

        
      </v-list>
      
    </v-navigation-drawer>
    <v-content>
      <work-space></work-space>
    </v-content>
    <v-toolbar
      app
    >
        <Tools></Tools>
    </v-toolbar>
    <right-nav></right-nav>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import WorkSpace from './components/WorkSpace'
import Tools from './components/Tools'
import RightNav from './components/RightNav'

export default {
  name: 'App',
  components: {
      HelloWorld,
      'work-space' : WorkSpace,
      'right-nav' : RightNav,
      Tools
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