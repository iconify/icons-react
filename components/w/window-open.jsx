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
		"content": `<style>.ryzf5qbht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 4.5h11.5a1.75 1.75 0 0 1 1.75 1.75v11.5a1.75 1.75 0 0 1-1.75 1.75H4.25a1.75 1.75 0 0 1-1.75-1.75V6.25A1.75 1.75 0 0 1 4.25 4.5M19.5 5.75l1.295.809a1.5 1.5 0 0 1 .705 1.272v8.338a1.5 1.5 0 0 1-.705 1.272l-1.295.809a1.307 1.307 0 0 1-2-1.108V6.858a1.307 1.307 0 0 1 2-1.108M10 4.5v15M2.5 12H10");
}
</style><path class="ryzf5qbht"/>`,
		"fallback": "uix:window-open",
	});
}

export default Component;
