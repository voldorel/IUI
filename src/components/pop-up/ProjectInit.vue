<template>
  <div id = 'init-pop-up'>
    <v-dialog v-model="dialog" persistent max-width="590">
      <v-btn slot="activator" dark>Create Project</v-btn>
      <v-card :style="{backgroundColor : '#1d1818'}">

        <v-btn icon small @click.native="dialog = false" :style="{width: '10px', height: '10px'}" class = 'grey1'>
          <v-icon size = '8px'>fas fa-times</v-icon>
        </v-btn>
        <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs3>
            <v-navigation-drawer 
            absolute
            right
            height="100%"
            :style="{width : '28%'}"
            permanent
            >
              <v-list>
                <v-list-tile @click = '' class = 'list-file'>
                  <v-list-tile-action class = 'm-icon'>
                    <v-icon small color = 'primary'>fas fa-file</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <p class="m-left-d grey1">
                      new file
                    </p>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click = '' class = 'list-file'>
                  <v-list-tile-action class = 'm-icon'>
                    <v-icon small>fas fa-file</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <p class="m-left-d grey1">
                      124124b34643573
                    </p>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile @click = '' class = 'list-file'>
                  <v-list-tile-action class = 'm-icon'>
                    <v-icon small>fas fa-file</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <p class="m-left-d grey1">
                      Untitled
                    </p>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <v-footer fixed :style = '{fontSize: "10px", textAlign: "center"}'>
                 <v-flex
                    text-xs-center
                    xs12
                  >
                  <a class="grey1">Open IUI file or PSD file</a>
                </v-flex>
              </v-footer>
            </v-navigation-drawer>
          </v-flex>
          <v-flex :key="`title`" xs12 :style="{textAlign : 'left'}">
            <div :style="{marginTop: '-50px'}" class="m-left">
              <p :style = '{fontSize : "30px"}'><strong>IUI</strong></p>
              <p class="grey1" :style = '{fontSize : "8px", marginTop: "-25px"}'><mark :style='{backgroundColor : "#ee44aa"}'>Interactive User Interface</mark></p>
            </div>
          </v-flex>
          <v-flex align-center xs12 :style="{textAlign : 'left', fontSize: '12px'}" class="grey1">
            <p class="m-left">Start something new</p>
          </v-flex>
          <v-divider
            :key="index"
            inset
          ></v-divider>
        </v-layout>
          <v-layout row wrap :style = '{fontSize: "10px", marginLeft: "30px"}' class="m-left">
            
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
          <div :style="{marginBottom: '-10px'}">
            <v-layout row wrap :style = '{fontSize: "12px", textAlign: "left"}'>
              <v-flex xs4 class="m-left" :style = "{marginBottom: '-20px'}">
                <p class = "list-title">
                  Resources
                </p>
                <div :style="{marginTop: '20px'}">
                  <v-card-text>
                    <div class="m-up"> 
                      <v-icon small> fas fa-play</v-icon>
                      Learn
                    </div>
                  </v-card-text>
                  <v-card-text>
                    <div class="m-up">
                      <v-icon small> fas fa-life-ring</v-icon>
                      Support
                    </div>
                  </v-card-text>
                  <v-card-text>
                    <div class="m-up">
                      <v-icon small> fas fa-comment</v-icon>
                      Give Feedback
                    </div>
                  </v-card-text>
                </div>
              </v-flex>
              <v-divider
                :key="index"
                inset
                vertical
              ></v-divider>
              <v-flex xs4 :style = "{marginBottom: '-20px'}">
                <p class = "list-title">
                  Tutorials
                </p>
                <div :style="{marginTop: '20px'}">
                  <v-card-text>
                    <div class="m-up">
                      <v-icon small> fas fa-columns</v-icon>
                      Layout
                    </div>
                  </v-card-text>
                  <v-card-text>
                    <div class="m-up">
                      <v-icon small> fas fa-chalkboard</v-icon>
                      Animation
                    </div>
                  </v-card-text>
                  <v-card-text>
                    <div class="m-up">
                      <v-icon small> fas fa-stream</v-icon>
                      Scroll
                    </div>
                  </v-card-text>
                </div>
              </v-flex>
              <v-flex xs4>
                
              </v-flex>
            </v-layout>
          </div>
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
  .m-left {
    margin-left: 20px;
  }

  .m-up {
    margin-top: -30px;
    font-size: 9px;
  }
  .list-title {
    font-size: 10px;
    padding-left: 10px;
    padding-top: 10px;
  }

  .grey1 {
    color: #ccc;
  }

  .m-left-d {
    padding-top: 15px;
    font-size: 10px;
  }

  .m-icon {
    margin-right: -30px;
  }

  .list-file {
    margin-top: -20px;
  }
</style>