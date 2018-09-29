<template>
    <div>
        <h2>Layers</h2>
        <v-text-field
                name="name"
                label="search"
                id="id"
        >
        </v-text-field>
        <Tree></Tree>


    </div>
</template>

<script>
	import Tree from './Tree';

	export default {
		name: "Layers",
        components:{
			Tree
        }
	}
</script>

<style scoped>

</style>