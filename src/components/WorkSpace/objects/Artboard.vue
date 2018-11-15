<template>
	<vue-draggable-resizable :resizable="true" :w="300" :h= '500' :x="x" :y="y" :style="{border: '1px solid blue', zIndex: '1', backgroundColor: '#ccc'}" @dragging="onDrag" @resizing="onResize"> 
	</vue-draggable-resizable>
</template>

<script>
import VueDraggableResizable from 'vue-draggable-resizable'

export default {
	props: {
		clientX: {
			default: 0,
		},
		clientY: {
			default: 0,
		}
	},
  data() {
  	return{
    x: +this.clientX - 203,
    y: +this.clientY - 31,
  };
},
  methods: {
    onResize(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.setX();
    },
    onDrag(x, y) {
      this.x = x;
      this.y = y;
      this.setX();
    },
  	setX() {
  		this.$store.commit('update', {x: this.x, y: this.y, height: this.height, width: this.width});
  	}
  	  },
  components:{
    VueDraggableResizable
  }
}
</script>