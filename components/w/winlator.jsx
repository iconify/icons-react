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
		"content": `<style>.emn0gb08o {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M5.5 5.5V35a7.5 7.5 0 0 0 7.5 7.5h29.5V13A7.5 7.5 0 0 0 35 5.5zm0 18.5h37M24 5.5v37");
}
</style><path class="emn0gb08o"/>`,
		"fallback": "arcticons:winlator",
	});
}

export default Component;
