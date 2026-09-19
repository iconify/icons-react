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
		"content": `<style>.ycvi2ubmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 8.393L29.2 21.85H18.8L5.5 8.393m37 31.214L29.2 26.15H18.8L5.5 39.607");
}
</style><path class="ycvi2ubmr"/>`,
		"fallback": "arcticons:xunlei-browser",
	});
}

export default Component;
