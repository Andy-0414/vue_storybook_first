<template>
	<div class="home">
		<ToggleSwitch></ToggleSwitch>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ToggleSwitch from "../components/ToggleSwitch.vue";

@Component({
	components: {
		ToggleSwitch
	}
})
export default class Home extends Vue {}
</script>

<style lang="scss">
</style>
