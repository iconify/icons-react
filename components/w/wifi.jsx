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
		"content": `<style>.r31p6nbhh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.765 28.616a10.516 10.516 0 0 0-13.435-.037v.037m6.691 4.305a4.216 4.216 0 1 0 4.216 4.216a4.216 4.216 0 0 0-4.216-4.216m13.157-11.595a20.676 20.676 0 0 0-26.314 0M43.5 13.674a30.57 30.57 0 0 0-39 0");
}
</style><path class="r31p6nbhh"/>`,
		"fallback": "arcticons:wifi",
	});
}

export default Component;
