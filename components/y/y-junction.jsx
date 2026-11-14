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
		"content": `<style>.m2wydtb2s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 21.5v-7c0-3.5-5-5.5-5.5-12m10.5 19v-7c0-3.5 5-5.5 5.5-12m-11.25 0C9.5 6 12 7.5 12 10c0-2.5 2.5-4 3.25-7.5M12 14.5v4");
}
</style><path class="m2wydtb2s"/>`,
		"fallback": "uix:y-junction",
	});
}

export default Component;
