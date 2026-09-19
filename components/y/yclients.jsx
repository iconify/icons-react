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
		"content": `<style>.lkr-voyuy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.228 19.375L22.238 5.5H6.18zm-.89 10.792L27.578 5.5H41.82l-21.362 37z");
}
</style><path class="lkr-voyuy"/>`,
		"fallback": "arcticons:yclients",
	});
}

export default Component;
