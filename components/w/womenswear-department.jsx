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
		"content": `<style>.lwq0z6ccz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 3l.5 6l-4 12h13l-4-12l.5-6M9.5 9h5");
}
</style><path class="lwq0z6ccz"/>`,
		"fallback": "uix:womenswear-department",
	});
}

export default Component;
