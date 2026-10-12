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
		"content": `<style>.ioq_t7pgh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.47 4.48zq.47.73 1.31.95t.29.89t-.5 1.54q.05.86-.76.55t-1.62 0t-.76-.55q.05-.87-.5-1.54t.29-.89t1.31-.95t.94 0m10-1.25zq.47.73 1.31.95t.29.89t-.5 1.54q.05.86-.76.55t-1.62 0t-.76-.55q.05-.87-.5-1.54t.29-.89t1.31-.95t.94 0M7 9.25c0 4.5 2 8.5 5 12M17 8c0 5.25-2 9.5-5 13.25m0 0v-6.5");
}
</style><path class="ioq_t7pgh"/>`,
		"fallback": "iconoven:wildflower",
	});
}

export default Component;
