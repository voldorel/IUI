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
	var nodes = [
		{title: 'Item1', isLeaf: true},
		{title: 'Item2', isLeaf: true, data: { visible: false }},
		{title: 'Folder1'},
		{
			title: 'Folder2', isExpanded: true, children: [
				{title: 'Item3', isLeaf: true},
				{title: 'Item4', isLeaf: true}
			]
		}
	];

	export default {
		name: "Layers",
        components:{
			Tree
        },
        data(){
			return{
				nodes
            };
        }
	}
</script>

<style scoped>

    .item-icon {
        display: inline-block;
        text-align: left;
        width: 20px;
    }
</style>