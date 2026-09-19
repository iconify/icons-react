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
		"content": `<style>.hs-fmi5tv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.62 42.5V17.28L24.175 5.5L42.38 17.28V42.5l-15.62-8.02c-1.953-1.001-3.432-.982-5.366 0z");
}
</style><path class="hs-fmi5tv"/>`,
		"fallback": "arcticons:welife",
	});
}

export default Component;
