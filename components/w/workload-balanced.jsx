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
		"content": `<style>.l4t_hcbzu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19M12 13l-4 7h8ZM4.75 4h1.5A1.75 1.75 0 0 1 8 5.75v5.5A1.75 1.75 0 0 1 6.25 13h-1.5A1.75 1.75 0 0 1 3 11.25v-5.5A1.75 1.75 0 0 1 4.75 4m13 0h1.5A1.75 1.75 0 0 1 21 5.75v5.5A1.75 1.75 0 0 1 19.25 13h-1.5A1.75 1.75 0 0 1 16 11.25v-5.5A1.75 1.75 0 0 1 17.75 4M3 8.5h5m8 0h5");
}
</style><path class="l4t_hcbzu"/>`,
		"fallback": "uix:workload-balanced",
	});
}

export default Component;
