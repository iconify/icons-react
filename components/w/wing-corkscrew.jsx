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
		"content": `<style>.kppf5yjjv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 7h.5A1.75 1.75 0 0 1 14 8.75v5.5A1.75 1.75 0 0 1 12.25 16h-.5A1.75 1.75 0 0 1 10 14.25v-5.5A1.75 1.75 0 0 1 11.75 7M9 3h6m-3 0v4m-2 2L5.5 5M14 9l4.5-4M12 16l1.5 1.25l-3 1.5l3 1.5L12 21");
}
</style><path class="kppf5yjjv"/>`,
		"fallback": "uix:wing-corkscrew",
	});
}

export default Component;
