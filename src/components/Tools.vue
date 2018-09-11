<template>
    <div class="text-xs-center">
        <v-menu offset-y>
            <v-icon
                    slot="activator"
                    left="true"
                    small>
                fas fa-mouse-pointer
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