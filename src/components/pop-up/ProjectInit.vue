<template>
  <div id = 'init-pop-up'>
    <v-dialog v-model="dialog" persistent max-width="550px">
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
                <v-list-tile>
                  asdasdasd
                </v-list-tile>
              </v-list>
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
          <v-flex xs3>
            <v-icon>fas fa-mobile-alt</v-icon>
          </v-flex>
          <v-flex xs3>
            <v-icon>fas fa-desktop</v-icon>
          </v-flex>
          <v-flex xs3>
            <v-icon>fas fa-tablet-alt</v-icon>
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