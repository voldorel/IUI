<template>
  <div :style = "{marginBottom: '-2em'}">
    <v-list-tile :style = "{marginTop : '-1.5em', marginLeft : '-1em'}">
      <v-card-text class = 'sm-text'>
        Typography
      </v-card-text>
    </v-list-tile>
    <v-list-tile>
      <v-card-text>
        <v-menu offset-y :style = "{marginTop : '-3.3em', marginLeft : '-2.7em'}">
          <v-btn flat slot="activator" class ='small-text rip' :ripple = 'false'>Avenir
            <div>
              <v-icon
              size = '0.7em'
              left="true"
              >
                fas fa-sort-down
              </v-icon>
            </div>
          </v-btn>
          <v-list>
            <!-- <v-list-tile v-for="item in items" :key="item.key" @click="callback">
              <v-list-tile-title>{{ item.key }}</v-list-tile-title>
            </v-list-tile> -->
          </v-list>
        </v-menu>
      </v-card-text>
    </v-list-tile>
    <v-list-tile :style = "{marginTop: '-1.3em'}">
      <v-card-text>
        <v-menu offset-y :style = "{marginTop : '-4.4em', marginLeft : '-2.7em'}">
          <v-btn flat slot="activator" class ='small-text rip'  :ripple = 'false'>Black
          <v-icon
          size = '0.7em'
          left="true"
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
    <div :style = "{marginTop : '-3.4em', marginLeft : '-0.5em', marginBottom : '-2.5em'}">
      <v-list-tile>
        <v-card-text class = 'sm-text'>
          Size
        </v-card-text>
        <v-card-text class = 'sm-text' :style = "{marginLeft : '-1em'}">
          Line
        </v-card-text>
        <v-card-text class = 'sm-text' :style = "{marginLeft : '-1em'}">
          Letter
        </v-card-text>
        <v-card-text class = 'sm-text' :style = "{marginLeft : '-1em'}">
          after
        </v-card-text>
      </v-list-tile>
      <v-list-tile>
        <v-text-field
        :style = "{marginLeft: '1.2em', marginTop: '-5em'}"
        class = 'caption'
        v-model = "layer.x"
      ></v-text-field>
        <v-text-field
          :style = "{marginLeft: '1.2em', marginTop: '-5em'}"
          v-model="layer.y"
          class = 'caption'
        >
        </v-text-field>
        <v-text-field
          :style = "{marginLeft: '1.2em', marginTop: '-5em'}"
          v-model="layer.y"
          class = 'caption'
        >
        </v-text-field>
        <v-text-field
          :style = "{marginLeft: '1.2em', marginTop: '-5em'}"
          v-model="layer.y"
          class = 'caption'
        >
        </v-text-field>
      </v-list-tile>
    </div>
    <v-list-tile>
      <v-card-text>
        <v-btn-toggle
          mandatory
          v-model="sel1"
          class="transparent"
        >
          <v-btn :value="1" :style = "{width : '2.9em', marginLeft : '-1em', height : '2em'}">
            <v-icon size = '0.8em'>fas fa-align-left</v-icon>
          </v-btn>

          <v-btn :value="2" :style = "{width : '2.9em', height : '2em'}">
            <v-icon size = '0.8em'>fas fa-align-center</v-icon>
          </v-btn>

          <v-btn :value="3" :style = "{width : '2.9em', height : '2em'}">
            <v-icon size = '0.8em'>fas fa-align-right</v-icon>
          </v-btn>

          <v-btn :value="4" :style = "{width : '2.9em', height : '2em'}">
            <v-icon size = '0.8em'>fas fa-align-left</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-card-text>
    </v-list-tile>
    <v-list-tile>
      <v-card-text :style = "{marginTop: '-2em'}">
        <v-btn-toggle
          mandatory
          v-model="sel2"
          class="transparent"
        >
          <v-btn :value="1" :style = "{width : '6.7em', marginLeft : '-1em', height : '2em', textTransform: 'none'}" class = 'caption'>
            Auto
          </v-btn>

          <v-btn :value="2" :style = "{width : '6.7em', height : '2em', textTransform: 'none'}" class = 'caption'>
            Fixed
          </v-btn>
        </v-btn-toggle>
      </v-card-text>
    </v-list-tile>
    <v-list-tile>
      <v-card-text :style = "{marginTop: '-4em'}">
        <v-btn-toggle
          mandatory
          v-model="sel3"
          class="transparent"
        >
          <v-btn :value="1" :style = "{width : '3.1em', marginLeft : '-1em', height : '2em', textTransform: 'none'}" class = 'caption'>
            u
          </v-btn>

          <v-btn :value="2" :style = "{width : '3.1em', height : '2em', textTransform: 'none'}" class = 'caption'>
            s
          </v-btn>
        </v-btn-toggle>
      </v-card-text>
      <v-card-text :style = "{marginTop: '-4em', marginLeft: '-0.8em',}">
        <v-btn-toggle
          mandatory
          v-model="sel4"
          class="transparent"
        >
          <v-btn :value="1" :style = "{width : '2.1em', marginLeft : '-1em', height : '2em', textTransform : 'none'}" class = 'caption'>
            AA
          </v-btn>

          <v-btn :value="2" :style = "{width : '2.1em', height : '2em', textTransform : 'none'}" class = 'caption'>
            aa
          </v-btn>
          <v-btn :value="3" :style = "{width : '2.1em', height : '2em', textTransform : 'none'}" class = 'caption'>
            Aa
          </v-btn>
        </v-btn-toggle>
      </v-card-text>
    </v-list-tile>
  </div>
</template>


<script>
export default {
  data () {
    return {
      layer: {
        x : '10',
        y : '20',
        xScale : '0.8',
        yScale : '0.8'
      },
      sel1 : 0,
      sel2 : 0,
      sel3 : 0,
      sel4 : 0
    }
  }
}
</script>
<style>
  .small-text {
    font-size: 0.8em;
    text-transform: none;
  }
  .sm-text {
  }
  .rip.v-btn:before {
    border-radius: inherit;
    color: inherit;
    content: '';
    position: absolute;
    opacity: 0.1 !important;
    left: auto;
    top: auto;
    height: 50%;
    opacity: 0.12;
    -webkit-transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    width: 50%;
  }
  select {
    color: red!important;
  }
</style>