import "@storybook/addon-knobs/register";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import CircleButton from "../components/CircleButton.vue";

export default {
	component: CircleButton, // 컴포넌트 등록
	title: "CircleButton", // 컴포넌트 이름
	decorators: [withKnobs], // 에드온
};

export const plus = () => ({
	components: { CircleButton },
	template: `<CircleButton @click="action" :style="{'background':background}">+</CircleButton>`,
	props: {
		background: { default: text("Text", "#36AFFF") },
	},
	methods: { action: action("clicked") },
});

export const minus = () => ({
	components: { CircleButton },
	template: '<CircleButton @click="action">-</CircleButton>',
	methods: { action: action("clicked") },
});
