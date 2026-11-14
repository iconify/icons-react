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
		"content": `<style>.r167dsbkf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 15v-4a4.5 4.5 0 0 1 9 0v4m-9 0h9a2.5 2.5 0 0 1 2.5 2.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 17.5A2.5 2.5 0 0 1 7.5 15M12 2v1.5M4.5 6l1.25 1.25M19.5 6l-1.25 1.25M2.5 11h1.25m16.5 0h1.25");
}
</style><path class="r167dsbkf"/>`,
		"fallback": "uix:works-beacon",
	});
}

export default Component;
