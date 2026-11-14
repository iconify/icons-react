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
		"content": `<style>.qhnxfgzrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 3.761L20.239 7.5a2.63 2.63 0 0 1 .769 1.856v5.288a2.63 2.63 0 0 1-.769 1.856L16.5 20.239a2.63 2.63 0 0 1-1.856.769H9.356a2.63 2.63 0 0 1-1.856-.769L3.761 16.5a2.63 2.63 0 0 1-.769-1.856V9.356A2.63 2.63 0 0 1 3.761 7.5L7.5 3.761a2.63 2.63 0 0 1 1.856-.769h5.288a2.63 2.63 0 0 1 1.856.769M9 9l6 6m0-6l-6 6");
}
</style><path class="qhnxfgzrb"/>`,
		"fallback": "uix:x-octagon",
	});
}

export default Component;
