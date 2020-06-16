import "@storybook/addon-knobs/register";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import ToggleSwitch from "../components/ToggleSwitch.vue";

export default {
	component: ToggleSwitch,
	title: "ToggleSwitch",
	decorators: [withKnobs],
};

export const def = () => ({
	components: { ToggleSwitch },
	template: `<ToggleSwitch @click="action">+</ToggleSwitch>`,
	methods: { action: action("clicked") },
});
