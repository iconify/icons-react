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
		"content": `<style>.t4ea9fdcu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.9 43.5L8.5 24L20.9 4.5h18.6L27.1 24l12.4 19.5z");
}
</style><path class="t4ea9fdcu"/>`,
		"fallback": "arcticons:zkb-banking",
	});
}

export default Component;
