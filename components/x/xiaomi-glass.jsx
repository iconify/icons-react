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
		"content": `<style>.m2kojccad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.582 19.94L5.5 7v34l37-34v34L24 24");
}
</style><path class="m2kojccad"/>`,
		"fallback": "arcticons:xiaomi-glass",
	});
}

export default Component;
