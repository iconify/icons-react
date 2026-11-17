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
		"content": `<style>.m5pc0qpnd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9.375 8.5l-3.752 4.717A.482.482 0 0 0 6 14h3.25a1 1 0 0 1 1 1v5c0 .33.417.476.623.217l7.504-9.434A.482.482 0 0 0 18 10h-3.25a1 1 0 0 1-1-1V4a.35.35 0 0 0-.623-.217z");
}
</style><path class="m5pc0qpnd"/>`,
		"fallback": "coolicons:zap",
	});
}

export default Component;
