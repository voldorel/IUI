<template>
  <div>
    <v-list-tile>
      <v-card-text class = 'sm-text'>
        Typography
      </v-card-text>
    </v-list-tile>
    <v-list-tile >
      <v-card-text>
        <v-menu offset-y>
          <v-btn flat slot="activator" class ='small-text'>Avenir
          <v-icon
          size = '0.7em'
          left="true"
          :style = "{marginLeft : '0.5em'}"
          >
            fas fa-sort-down
          </v-icon>
          </v-btn>
          <v-list>
            <!-- <v-list-tile v-for="item in items" :key="item.key" @click="callback">
              <v-list-tile-title>{{ item.key }}</v-list-tile-title>
            </v-list-tile> -->
          </v-list>
        </v-menu>
      </v-card-text>
    </v-list-tile>
    <v-list-tile >
      <v-card-text>
        <v-menu offset-y>
          <v-btn flat slot="activator" class ='small-text'>Black
          <v-icon
          size = '0.7em'
          left="true"
          :style = "{marginLeft : '0.5em'}"
          >
            fas fa-sort-down
          </v-icon>
          </v-btn>
          <v-list>
            <!-- <v-list-tile v-for="item in items" :key="item.key" @click="callback">
              <v-list-tile-title>{{ item.key }}</v-list-tile-title>
            </v-list-tile> -->
          </v-list>
        </v-menu>
      </v-card-text>
    </v-list-tile>
  </div>
</template>


<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>
<style>
  .small-text {
    font-size: 0.8em;
    text-transform: none;
  }
</style>