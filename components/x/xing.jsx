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
		"content": `<style>.w6-10nbsw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.79 12.048h6.29l5.033 7.549l-6.29 12.58H7.016l7.549-12.58zM33.436 4.5h7.548l-12.58 22.645L37.21 43.5h-7.55l-7.548-16.355z");
}
</style><path class="w6-10nbsw"/>`,
		"fallback": "arcticons:xing",
	});
}

export default Component;
