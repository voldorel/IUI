<template>
    <div>
        <h3>Layers</h3>
        <v-flex xs12>
            <v-text-field
                    name="name"
                    label="Search My Project"
                    id="id"
                    class="mx-1"
                    single-line
                    background-color="#1E1E20"
                    height="25px"
                    prepend-inner-icon="fas fa-angle-left"
            >
            </v-text-field>
        </v-flex>
        <Tree></Tree>


    </div>
</template>

<script>
	import Tree from './Tree';

	export default {
		name: "Layers",
		components: {
			Tree
		}
	}
</script>

<style src="./Search-custom.css"></style>



<style scoped>

</style>