<template>
    <div :style="{marginBottom: '-10px'}">
        <v-layout row wrap :style = '{fontSize: "12px", textAlign: "left"}'>
            <v-flex xs4 class="m-left" :style = "{marginBottom: '-20px'}">
                <p class = "list-title">
                    Resources
                </p>
                <div :style="{marginTop: '20px'}">
                    <v-card-text>
                        <div class="m-up" >
                            <v-icon small > fas fa-play</v-icon>
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
</template>

<script>
    export default {
        name: "BottomIcons"
    }
</script>

<style scoped>

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


    .m-left-d {
        padding-top: 1.5em;
        font-size: 10px;
    }



    .m-up span {
        margin-left: 1em;
    }
    i{
        vertical-align: middle
    }

</style>