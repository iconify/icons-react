import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t4g5kt4iv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31 24l-10.453 6.035v-12.07zM4.5 39.5h39m-39-31h39m-4 6v23c0 1.108-.892 2-2 2m-29-6v-23c0-1.108.892-2 2-2");
}
</style><path class="t4g5kt4iv"/>`,
		"fallback": "arcticons:zoho-show",
	});
}

export default Component;
