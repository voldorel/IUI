<template>
    <div>
        <v-navigation-drawer
                persistent
                :mini-variant="miniVariant"
                v-model="drawer"
                enable-resize-watcher
                fixed
                app
                :width="240"
                permanent
                class="pa-0"
        >
            <v-tabs right >
                <v-tab href="#Layer">
                    <v-tooltip bottom>
                        <v-icon
                                slot="activator"> fas fa-layer-group</v-icon>
                        <span>Layers</span>
                    </v-tooltip>

                </v-tab>

                <v-tab href="#Components">
                    <v-tooltip bottom>
                        <v-icon slot="activator">
                            fas fa-cube
                        </v-icon>
                        <span>Components</span>
                    </v-tooltip>
                </v-tab>
            </v-tabs>

            <v-tabs-items>
                <v-tab-item :id="Layers">
                    
                    <Layers></Layers>
                </v-tab-item>
                <v-tab-item :id="Components">
                    
                    <Components></Components>
                </v-tab-item>
            </v-tabs-items>

        </v-navigation-drawer>
    </div>
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

</style>