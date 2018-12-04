<template>
    <div class="text-xs-center">
        <v-menu offset-y :style = "{marginLeft : '-10px'}" transition="slide-y-transition">
            <v-icon
                    size = '0.9em'
                    slot="activator"
                    left="true">
                {{selected}}
            </v-icon>

            <v-icon
                    size = '0.7em'
                    slot="activator"
                    left="true"
                    :style = "{marginLeft : '0.7em'}"
                    >
                fas fa-sort-down
            </v-icon>
            <v-list>
                <v-list-tile
                        v-for="(tool, index) in tools"
                        :key="index"
                        @click="printSelected(tool)"
                        >
                    <v-list-tile-title>
                        <v-icon :size = '15'>{{ tool.iicon }}</v-icon>
                    </v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
	export default {
		name: "Tools",
		data(){
			return{
                selected: "near_me",
				tools:[{name:'layer', iicon: 'fas fa-vector-square'},{name:'image', iicon: 'fas fa-images'},{name:'text', iicon: 'fas fa-font'},{name:'button', iicon: 'fas fa-plus-square'},{name:'hotspot', iicon: 'fas fa-square'}]
			}
		},
        methods: {
            printSelected:function (key) {
                console.log(key.name);
                this.selected = key.iicon;
            }
        }
	}
</script>

<style scoped>

</style>