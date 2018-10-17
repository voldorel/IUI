<template>
	<vue-draggable-resizable :resizable="true" :w="300" :h= '500' :x="x" :y="y" :style="{border: '1px solid blue', zIndex: '1', backgroundColor: '#ccc'}" v-on:dragging="onDrag" v-on:resizing="onResize">
	       <!-- <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
	          X: {{ x }} / Y: {{ y }} - Width: {{ width }} / Height: {{ height }}</p> -->
	</vue-draggable-resizable>
</template>

<script>
import Vue from 'vue'
import VueDraggableResizable from 'vue-draggable-resizable'
export default {
  data: () => ({
    x: 0,
    y: 0,
  }),
  methods: {
    onResize: function (x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    onDrag: function (x, y) {
      this.x = x;
      this.y = y;
    }
  }
  ,components:{
    'vue-draggable-resizable': VueDraggableResizable
  }
}
</script>