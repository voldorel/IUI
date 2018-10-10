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
            :right="true"
            height="100%"
            :style="{width : '28%'}"
            permanent
            :floating="true"
            >

              <FileList class="mt-2"></FileList>

              <v-footer fixed :style = '{fontSize: "10px", textAlign: "center"}' color="rgba(0,0,0,0)">
                 <v-flex
                    text-xs-center
                    xs12
                  >
                   <v-divider class="mb-2"></v-divider>
                  <a class="grey1" >Open IUI file or PSD file</a>
                </v-flex>
              </v-footer>

            </v-navigation-drawer>
          </v-flex>

          <v-flex :key="`title`" xs12 :style="{textAlign : 'left'}">
            <div :style="{marginTop: '-50px'}" class="m-left">
              <p :style = '{fontSize : "30px", marginBottom:"0px"}'><strong>IUI</strong></p>
              <p style="font-size: 8px; width: 100px; background-color: #f83964; color: #ccc;">Interactive User Interface</p>
            </div>
          </v-flex>

          <v-flex xs12 :style="{textAlign : 'left', fontSize: '12px'}" class="grey1">
            <p class="m-left" style="margin-bottom: 5px">Start something new</p>
          </v-flex>
        </v-layout >
            <hr class="custom" :style="{margin:'0px 170px 0px 0px'}">
            <Deviceicons></Deviceicons>
            <hr class="custom" :style="{margin:'0px 170px 0px 0px'}">
            <BottomIcons></BottomIcons>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>





<script>
    import FileList from './FileList';
    import Deviceicons from './DeviceIcons'
    import BottomIcons from './BottomIcons'

    export default {
    data: () => ({
      dialog: false
    }),
    components: {
      FileList,
      Deviceicons,
      BottomIcons
    }
  }
</script>



<style scoped>
  #init-pop-up {
    z-index: 100;
  }
  .m-left {
    margin-left: 1em;
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

  .v-card.theme--dark {
    background-color: #1d1b1e;
  }

  hr.custom{
    opacity:0.5;
    height: 1px;
    border: none;
    background-color: #333;
    color: #333;
  }

</style>