<template>
	<div class="toggleswitch" @click="toggleActive">
		<div class="toggleswitch__slide">
			<div class="toggleswitch__circle" :class="{'active':isActive}"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ToggleSwitch extends Vue {
	isActive: boolean = false;

	toggleActive() {
		this.isActive = !this.isActive;
	}
}
</script>

<style lang="scss">
.toggleswitch {
	width: 100px;
	height: 50px;
	.toggleswitch__slide {
		position: relative;

		width: 100px;
		height: 50px;

		background-color: #666666;

		border-radius: 25px;

		overflow: hidden;
	}
	.toggleswitch__circle {
		position: absolute;

		left: -50%;

		width: 100px;
		height: 50px;

		border-radius: 25px;

		background-color: #bbbbbb;

		transition: 0.2s;
		&::before {
			content: "";
			position: absolute;
			right: 0;

			width: 50px;
			height: 50px;

			border-radius: 25px;

			background-color: #36afff;
		}
		&.active {
			left: 0%;
		}
	}
}
</style>
