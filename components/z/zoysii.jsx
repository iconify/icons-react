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
		"content": `<style>.y6m1vacym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 4l18.67 14.81L24 33.62L5.33 18.81Zm12.13 20l6.54 5.19L24 44L5.33 29.19L11.87 24");
}
</style><path class="y6m1vacym"/>`,
		"fallback": "arcticons:zoysii",
	});
}

export default Component;
