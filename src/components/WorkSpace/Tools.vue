<template>
    <div class="text-xs-center">
        <v-menu offset-y :style = "{marginLeft : '-10px'}" transition="slide-y-transition">
            <v-icon
                    size = '0.9em'
                    slot="activator"
                    left="true">
                near_me
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
                        @click="console.log()"
                >
                    <v-list-tile-title>{{ tool }}</v-list-tile-title>
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
				tools:['layer','image','text','button','hotspot']
			}
		}
	}
</script>

<style scoped>

</style>