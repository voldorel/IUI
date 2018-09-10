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
          <v-spacer></v-spacer>
          <v-btn fab small flat>
            <v-icon>compare_arrows</v-icon>
          </v-btn>
          <v-btn fab small flat>
            
              <v-icon>input</v-icon>
            
          </v-btn>
        </v-list-tile>
        <v-text-field
          name="name"
          label="search"
          id="id"
        >
        </v-text-field>
        
      </v-list>
      
    </v-navigation-drawer>
    <v-toolbar
      app
    >
      
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
    </v-toolbar>
    <v-navigation-drawer
      persistant
      :right="right"
      v-model="rightDrawer"
      fixed
      app
      :width="210"
      permanent
    >
      <v-list>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: 'chevron_right',
        title: 'root',
        subitems: [{
          icon: 'mood',
          title: 'mood',
          active: false,
            subitems: [{
            icon: 'mood',
            title: 'mood'
          },
          {
            icon: 'tram',
            title: 'tram'
          }]
        },
        {
          icon: 'tram',
          title: 'tram',
          active: false,
          subitems: [{
            icon: 'mood',
            title: 'mood'
          },
          {
            icon: 'tram',
            title: 'tram'
          }]
        }]
      }, {
        icon: 'chevron_right',
        title: 'root',
        subitems: [{
          icon: 'mood',
          title: 'mood',
          active: false,
          subitems: [{
            icon: 'mood',
            title: 'mood'
          },
          {
            icon: 'tram',
            title: 'tram'
          }]
        },
        {
          icon: 'tram',
          title: 'tram',
          active: false,
          subitems: [{
            icon: 'mood',
            title: 'mood'
          },
          {
            icon: 'tram',
            title: 'tram'
          }]
        }]
      }],
      miniVariant: false,
      right: true,
    }
  }
}
</script>