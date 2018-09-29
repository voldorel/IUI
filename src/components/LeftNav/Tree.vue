<template >
    <div class="row scroll-bar-wrap">
        <div class="tree-container scroll-box">
            <sl-vue-tree
                    v-model="nodes"
                    ref="slVueTree"
                    :allow-multiselect="true"
            >

                <template slot="title" slot-scope="{ node }">
                      <span class="item-icon">
                        <i class="fa fa-file" v-if="node.isLeaf"></i>
                        <i class="fa fa-folder" v-if="!node.isLeaf"></i>
                      </span>

                        {{ node.title }}
                </template>


                <template slot="toggle" slot-scope="{ node }">
                      <span v-if="!node.isLeaf">
                        <i v-if="node.isExpanded" class="fa fa-chevron-down"></i>
                        <i v-if="!node.isExpanded" class="fa fa-chevron-right"></i>
                      </span>
                </template>


                <template slot="sidebar" slot-scope="{ node }">
                      <span class="visible-icon" @click="event => toggleVisibility(event, node)">
                        <i v-if="!node.data || node.data.visible !== false" class="fa fa-eye"></i>
                        <i v-if="node.data && node.data.visible === false" class="fa fa-eye-slash"></i>
                      </span>
                </template>

            </sl-vue-tree>
        </div>

        <div class="cover-bar"></div>

    </div>


</template>

<script>


	var nodes = [
		{title: 'Item1', isLeaf: true},
		{title: 'Item2', isLeaf: true, data: { visible: false }},
		{title: 'Folder1'},
		{
			title: 'Folder2', isExpanded: true, children: [
				{title: 'Item3', isLeaf: true},
				{title: 'Item4', isLeaf: true},
				{
					title: 'Folder3', children: [
						{title: 'Item5', isLeaf: true}
					]
				}
			]
		},
		{title: 'Folder5', isExpanded: false},
		{title: 'Item6', isLeaf: true},
		{title: 'Item7', isLeaf: true, data: { visible: false }},
		{title: 'Folder5', isExpanded: false},
		{title: 'Item6', isLeaf: true},
		{title: 'Item7', isLeaf: true, data: { visible: false }},
		{
			title: 'Folder6', children: [
				{
					title: 'Folder7', children: [
						{title: 'Item8', isLeaf: true},
						{title: 'Item9', isLeaf: true}
					]
				}
			]
		}
	];

	import SlVueTree from 'sl-vue-tree';

	export default {
		name: "Tree",
		components: { SlVueTree },
		data: function () {
			return {
				nodes: nodes
			}
		},
        methods:{
			toggleVisibility: function (event, node) {
				const slVueTree = this.$refs.slVueTree;
				event.stopPropagation();
				const visible = !node.data || node.data.visible !== false;
				slVueTree.updateNode(node.path, {data: { visible: !visible}});
				this.lastEvent = `Node ${node.title} is ${ visible ? 'visible' : 'invisible'} now`;
				},
        }
	}
</script>
<style src="../../../node_modules/sl-vue-tree/dist/sl-vue-tree-dark.css"></style>
<style src="./TreeCustom.css"></style>

<style scoped>


</style>