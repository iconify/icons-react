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
		"content": `<style>.kg2ncgb1o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.875 5.5H8.13c1.264 7.02 2.363 15.061 21.027 18.679C19.278 26.976 7.84 29.837 8.13 42.5h31.743");
}
</style><path class="kg2ncgb1o"/>`,
		"fallback": "arcticons:zepp",
	});
}

export default Component;
