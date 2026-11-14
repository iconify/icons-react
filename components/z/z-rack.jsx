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
		"content": `<style>.tgqg4sbfy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 3.5H19m-14 0V18M17.5 3.5V13M3 18h5.5l7.5-5h5.5M2.75 20.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m16.5-5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><path class="tgqg4sbfy"/>`,
		"fallback": "uix:z-rack",
	});
}

export default Component;
