<template>
  <div id = 'login-pop-up'>
    <v-dialog v-model="dialog" persistent max-width="550px">
      <v-btn slot="activator" dark>login</v-btn>
      <v-card :style="{backgroundColor : '#1d1818'}">
        <v-btn icon small @click.native="dialog = false">
        <v-icon>close</v-icon>
      </v-btn>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs3></v-flex>
          <v-flex :key="`title`"xs6 :style="{textAlign : 'left'}">
            <div>
              <p class="headline"><strong>IUI</strong></p>
              <p :style = '{fontSize : "10px", marginTop: "-15px"}'><mark :style='{backgroundColor : "#ee44aa", color: "white"}'>Interactive User Interface</mark></p>
              <p>Sign in to IUI</p>
            </div>
          </v-flex>
          <v-flex xs3></v-flex>
          
          <v-flex xs3></v-flex>
          <v-flex :key="`login-bar`"align-center xs6>
            <v-text-field label="Email address" required></v-text-field>
          </v-flex>
          <v-flex xs3></v-flex>

          <v-flex xs3></v-flex>
          <v-flex :key="`pass-bar`" xs6>
            <v-text-field label="Password" type="password" required></v-text-field>
          </v-flex>
          <v-flex xs3></v-flex>
          <v-flex xs3></v-flex>
          <v-flex :key="`sign-button`" xs6>
            <v-btn block color="secondary">Sign in</v-btn>
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

</style>