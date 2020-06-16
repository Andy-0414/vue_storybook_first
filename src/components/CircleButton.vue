<template>
	<button class="circlebutton" @click="onClick">
		<slot></slot>
	</button>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class CircleButton extends Vue {
	onClick() {
		this.$emit("click");
	}
}
</script>

<style lang="scss" scoped>
.circlebutton {
	outline: none;
	background: #36afff;
	border: none;

	color: white;
	font-size: 1.5em;

	box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);

	display: flex;
	justify-content: center;
	align-items: center;

	border-radius: 50%;

	width: 50px;
	height: 50px;
}
</style>
