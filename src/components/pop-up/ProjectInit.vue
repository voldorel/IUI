<template>
  <div id = 'init-pop-up'>
    <v-dialog v-model="dialog" persistent max-width="590">
      <v-btn slot="activator" dark>Create Project</v-btn>
      <v-card>

        <v-btn icon small @click.native="dialog = false" :style="{width: '10px', height: '10px'}" class = 'grey1'>
          <v-icon size = '8px'>fas fa-times</v-icon>
        </v-btn>
        <v-container grid-list-md>
        <v-layout row wrap>
          <v-flex xs3>
            <v-navigation-drawer 
            absolute
            right
            height="100%"
            :style="{width : '28%'}"
            permanent
            >
              <!--<v-list class="mt-2"-->
              <!--:dense="false">-->
                <!--<v-list-tile @click = 'console.log()' class = 'list-file'>-->
                  <!--<v-list-tile-action class = 'm-icon'>-->
                    <!--<v-icon size = '0.7em' color = 'primary'>fas fa-file</v-icon>-->
                  <!--</v-list-tile-action>-->
                  <!--<v-list-tile-content>-->
                    <!--<p class="m-left-d grey1">-->
                      <!--new file-->
                    <!--</p>-->
                  <!--</v-list-tile-content>-->
                <!--</v-list-tile>-->
                <!--<v-list-tile @click = 'console.log()' class = 'list-file'>-->
                  <!--<v-list-tile-action class = 'm-icon'>-->
                    <!--<v-icon size = '0.7em'>fas fa-file</v-icon>-->
                  <!--</v-list-tile-action>-->
                  <!--<v-list-tile-content>-->
                    <!--<p class="m-left-d grey1">-->
                      <!--124124b34643573-->
                    <!--</p>-->
                  <!--</v-list-tile-content>-->
                <!--</v-list-tile>-->
                <!--<v-list-tile @click = 'console.log()' class = 'list-file'>-->
                  <!--<v-list-tile-action class = 'm-icon'>-->
                    <!--<v-icon size = '0.7em'>fas fa-file</v-icon>-->
                  <!--</v-list-tile-action>-->
                  <!--<v-list-tile-content>-->
                    <!--<p class="m-left-d grey1">-->
                      <!--Untitled-->
                    <!--</p>-->
                  <!--</v-list-tile-content>-->
                <!--</v-list-tile>-->
              <!--</v-list>-->
              <FileList class="mt-2"></FileList>
              <v-footer fixed :style = '{fontSize: "10px", textAlign: "center"}' color="rgba(0,0,0,0)">
                 <v-flex
                    text-xs-center
                    xs12
                    :style = '{backgroundColor:"rgba(0,0,0,0)"}'
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
        </v-layout >
          <v-layout row wrap :style = '{fontSize: "10px", marginLeft: "30px"}' class="m-left"  text-xs-center>
            <v-flex xs2>
              <img
                src="./../../assets/iPhonex.png"
                :style = "{height: '6em', paddingTop: '2.5em'}"
              />
            </v-flex>
            <v-flex xs2>
              <img
                src="./../../assets/iPad.png"
                :style = "{height: '5.5em', paddingTop: '1.6em'}"
              />
            </v-flex>
            <v-flex xs2>
              <img
                src="./../../assets/mac.png"
                :style = "{height: '5.2em', paddingTop: '2em'}"
              />
            </v-flex>
            <v-flex xs2>
              <img
                src="./../../assets/blank.png"
                :style = "{height: '5.2em', paddingTop: '2em'}"
              />
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
                      <span>Learn</span>
                    </div>
                  </v-card-text>
                  <v-card-text>
                    <div class="m-up">
                      <v-icon small> fas fa-life-ring</v-icon>
                      <span>Support</span>
                    </div>
                  </v-card-text>
                  <v-card-text>
                    <div class="m-up">
                      <v-icon small> fas fa-comment-dots</v-icon>
                      <span>Give Feedback</span>
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
                      <span>Layout</span>
                    </div>
                  </v-card-text>
                  <v-card-text>
                    <div class="m-up">
                      <v-icon small> fas fa-chalkboard</v-icon>
                      <span>Animation</span>
                    </div>
                  </v-card-text>
                  <v-card-text>
                    <div class="m-up">
                      <v-icon small> fas fa-stream</v-icon>
                      <span>Scroll</span>
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
    import FileList from './FileList';

    export default {
    data: () => ({
      dialog: false
    }),
    components: {
      FileList
    }
  }
</script>



<style>
  #init-pop-up {
    z-index: 100;
  }
  .m-left {
    margin-left: 1em;
  }

  .m-up {
    margin-top: -2.4em;
    font-size: 0.8em;
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
    padding-top: 1.5em;
    font-size: 10px;
  }

  .m-icon {
    margin-right: -2.8em;
  }

  .list-file {
    margin-top: -1.8em;
  }

  .v-dialog__content.v-dialog__content--active {
    background-color: rgba(0,0,0,1);
  }

  .m-up span {
    margin-left: 1em;
  }
</style>