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
		"content": `<style>.owwm30b1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9 34.91l8.18-21.82m2.73 21.82l8.18-21.82m2.73 21.82L39 13.09");
}
</style><path class="owwm30b1n"/>`,
		"fallback": "arcticons:what3words",
	});
}

export default Component;
