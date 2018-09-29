<template>
    <v-navigation-drawer
                persistent
                :mini-variant="miniVariant"
                v-model="drawer"
                enable-resize-watcher
                fixed
                app
                :width="144"
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
                        >
                        fas fa-layer-group
                        </v-icon>
                        <span>Layers</span>
                    </v-tooltip>

                </v-tab>
                <v-tab-item >

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
                <v-tab-item >

                    <Components></Components>
                </v-tab-item>
            </v-tabs>

            <v-tabs-items>


            </v-tabs-items>

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
        }
	}
</script>

<style scoped>

    .v-tabs__item--active i{
        color: #578ed1;

    }
</style>