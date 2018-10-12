<template>
    <v-navigation-drawer
                persistent
                :mini-variant="miniVariant"
                v-model="drawer"
                enable-resize-watcher
                fixed
                app
                :width="drawerWidth"
                permanent
                class="pa-0"
        >
            <v-tabs
                    v-model="active"
                    :right="true"
                    :hide-slider="true"
            >
                <v-tab
                        :ripple="false"
                >
                    <v-tooltip bottom>
                        <v-icon
                                :size="15"
                                slot="activator"
                                class="topButtons"
                                id="btn"
                        >
                        fas fa-layer-group
                        </v-icon>
                        <span>Layers</span>
                    </v-tooltip>

                </v-tab>
                <v-tab-item
                        id="layers"
                >
                    <Layers></Layers>
                </v-tab-item>

                <v-tab
                        :ripple="false"
                >
                    <v-tooltip bottom>
                        <v-icon slot="activator"
                                :size="15"
                                class="topButtons"
                        >
                            fas fa-cube
                        </v-icon>
                        <span>Components</span>
                    </v-tooltip>
                </v-tab>
                <v-tab-item
                    id="components"
                >
                    <Components></Components>
                </v-tab-item>
            </v-tabs>

    </v-navigation-drawer>
</template>

<script>
    import Components from './Components'
    import Layers from './Layers'
	export default {
		name: "LeftNav",
        components:{
			Components,
            Layers
        },
        computed:{
            drawerWidth(){
                let width =  0.135 * this.$vuetify.breakpoint.width;
                width = Math.max(width, 150);
                width = Math.min(width, 300);
                return width;
            }
        }
	}
</script>

<style src="./NavCustom.css"></style>


<style scoped>

    .v-tabs__item--active i{
        color: #578ed1;

    }

    i.v-icon.topButtons.theme--dark {
        padding: 6px 6px 6px 6px;
        /* margin: 20px; */
    }

    i.v-icon.topButtons.fas.fa-cube.theme--dark {
        margin-right: 8px;
    }
    i.v-icon.topButtons{
        border-radius: 3px;
        background: #1b1f22;
    }


</style>