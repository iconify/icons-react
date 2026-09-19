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
		"content": `<style>.mvke1bbcu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5a10.43 10.43 0 0 0-10.43 10.43c0 5 4.53 9 4.53 14.61m.22 9.66l11.58-2.04M24 4.5a10.43 10.43 0 0 1 10.43 10.43c0 5-4.53 9-4.53 14.61v8.06a5.9 5.9 0 0 1-11.8 0v-3.81l11.8-2.08");
}
</style><path class="mvke1bbcu"/>`,
		"fallback": "arcticons:xperiaassist",
	});
}

export default Component;
