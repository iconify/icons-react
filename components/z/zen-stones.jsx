import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.wqykmrbhw {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8 7q0-2.5 4-2.5q1.535 0 2.654.602Q16 5.827 16 7q0 1.018-.664 1.622q2.414.684 2.414 2.628q0 1.425-1.297 2.173q3.297.794 3.297 3.077q0 3.5-7.75 3.5t-7.75-3.5q0-2.283 3.297-3.077q-1.297-.748-1.297-2.173q0-1.944 2.414-2.628Q8 8.018 8 7");
}
</style><path class="wqykmrbhw"/>`,
		"fallback": "uix-solid:zen-stones",
	});
}

export default Component;
