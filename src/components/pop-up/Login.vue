<template>
  <div id = 'login-pop-up'>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-btn slot="activator" dark>login</v-btn>
      <v-card>
        <v-btn icon small @click.native="dialog = false" :style="{width: '10px', height: '10px', color: '#ccc'}">
          <v-icon size = '10px'>fas fa-times</v-icon>
        </v-btn>
        <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs3></v-flex>
          <v-flex :key="`title`" xs6 :style="{textAlign : 'left' , marginTop: '-25px'}">
            <div>
              <p :style = '{fontSize : "29px"}' class = 'grey1'><strong>IUI</strong></p>
              <p :style = '{fontSize : "8px", marginTop: "-25px"}'><mark :style='{backgroundColor : "#ee44aa", color: "white"}'>Interactive User Interface</mark></p>
              <p :style = '{fontSize : "11px", marginTop: "-5px"}'>Sign in to IUI</p>
            </div>
          </v-flex>
          <v-flex xs3></v-flex>
          
          <v-flex xs3></v-flex>
          <v-flex :key="`login-bar`" align-center xs6>
            <v-text-field label="Email address" required></v-text-field>
          </v-flex>
          <v-flex xs3></v-flex>

          <v-flex xs3></v-flex>
          <v-flex :key="`pass-bar`" xs6>
            <v-text-field label="Password" type="password" required :style = '{marginTop: "-10px"}'>></v-text-field>
          </v-flex>
          <v-flex xs3></v-flex>
          <v-flex xs3></v-flex>
          <v-flex :key="`sign-button`" xs6>
            <v-btn small block color="secondary" :style = '{fontSize : "12px", marginTop: "-2px", textTransform: "none"}'>Sign in</v-btn>
          </v-flex>
          <v-flex xs3></v-flex>
          <v-flex xs3></v-flex>
          <v-flex xs6>
            <div :style="{marginTop: '25px', textAlign: 'left', marginBottom: '-20px', marginLeft : '20px'}">
              <a class="links">Create account</a> .
              <a class="links">Forgot password</a>
            </div>
          </v-flex>
          <v-flex xs3></v-flex>
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
  #login-pop-up {
    z-index: 100;
  }
  .links {
    color: #ccc;
    font-size: 9px;
  }
</style>