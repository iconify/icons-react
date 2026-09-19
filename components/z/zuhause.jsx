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
		"content": `<style>.c1fniwbsf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 24v14.5c0 2.216-1.784 4-4 4h-29c-2.216 0-4-1.784-4-4V24M24 5.5L5.5 24M24 5.5L42.5 24m-27.75-9.25l26.581 26.581M30.935 12.435L5.5 37.87");
}
</style><path class="c1fniwbsf"/>`,
		"fallback": "arcticons:zuhause",
	});
}

export default Component;
