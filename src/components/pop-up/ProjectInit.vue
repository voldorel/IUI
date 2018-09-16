<template>
  <div id = 'init-pop-up'>
    <v-dialog v-model="dialog" persistent max-width="650px">
      <v-btn slot="activator" dark>Create Project</v-btn>
      <v-card :style="{backgroundColor : '#1d1818'}">

        <v-btn icon small @click.native="dialog = false">
        <v-icon>close</v-icon>
      </v-btn>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs3>
            <v-navigation-drawer 
            absolute
            right
            height="100%"
            :style="{width : '30%'}"
            permanent
            >
              <v-list>
                <v-list-tile @click = ''>
                  <v-list-tile-action>
                    <v-icon small color = 'primary'>fas fa-file</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    new file
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click = ''>
                  <v-list-tile-action>
                    <v-icon small>fas fa-file</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    file 1
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click = ''>
                  <v-list-tile-action>
                    <v-icon small>fas fa-file</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    file 2
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <v-footer fixed :style = '{fontSize: "12px", textAlign: "center"}'>
                 <v-flex
                    text-xs-center
                    xs12
                    :style = "{color: '#ccc'}"
                  >
                  Open IUI file or PSD file
                </v-flex>
              </v-footer>
            </v-navigation-drawer>
          </v-flex>
          <v-flex :key="`title`"xs12 :style="{textAlign : 'left'}">
            <div>
              <p class="headline"><strong>IUI</strong></p>
              <p :style = '{fontSize : "10px", marginTop: "-15px"}'><mark :style='{backgroundColor : "#ee44aa", color: "white"}'>Interactive User Interface</mark></p>
            </div>
          </v-flex>
          <v-flex align-center xs12 :style="{textAlign : 'left'}">
            <p>Start something new</p>
          </v-flex>
          <v-divider
            :key="index"
            inset
          ></v-divider>
        </v-layout>
          <v-layout row wrap :style = '{fontSize: "10px"}'>
            
            <v-flex xs2>
              <img src="https://png.icons8.com/ios/50/ffffff/iphone-x-filled.png">
            </v-flex>
            <v-flex xs2>
              <img src="https://png.icons8.com/ios/50/ffffff/mac-client.png">
            </v-flex>
            <v-flex xs2>
              <img src="https://png.icons8.com/ios/50/ffffff/ipad-filled.png">
            </v-flex>
            <v-flex xs2>
              <img src="https://png.icons8.com/ios/50/ffffff/create-new.png">
            </v-flex>
            <v-flex xs4>
            </v-flex>
            <v-flex xs2>
              iPhone X
            </v-flex>
            <v-flex xs2>
              iMac
            </v-flex>
            <v-flex xs2>
              iPad Air/ Mini
            </v-flex>
            <v-flex xs2>
              Blank Canvas
            </v-flex>
            <v-flex xs4>
            </v-flex>
            <v-divider
            :key="index"
            inset
          ></v-divider>
          </v-layout>
          <v-layout row wrap :style = '{fontSize: "12px", textAlign: "left"}'>
            <v-flex xs4>
              Resources
              <v-card-text>
                <v-icon small> fas fa-play</v-icon>
                Learn
              </v-card-text>
              <v-card-text>
                <v-icon small> fas fa-life-ring</v-icon>
                Support
              </v-card-text>
              <v-card-text>
                <v-icon small> fas fa-comment</v-icon>
                Give Feedback
              </v-card-text>
            </v-flex>
            <v-divider
              :key="index"
              inset
              vertical
            ></v-divider>
            <v-flex xs4>
              Tutorials
              <v-card-text>
                <v-icon small> fas fa-columns</v-icon>
                Layout
              </v-card-text>
              <v-card-text>
                <v-icon small> fas fa-chalkboard</v-icon>
                Animation
              </v-card-text>
              <v-card-text>
                <v-icon small> fas fa-stream</v-icon>
                Scroll
              </v-card-text>
            </v-flex>
            <v-flex xs4>
              
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>





<script>
  export default {
    data: () => ({
      dialog: false
    })
  }
</script>



<style>
  #init-pop-up {
    z-index: 100;
  }

</style>