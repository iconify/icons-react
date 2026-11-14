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
		"content": `<style>.zmr_a4-cr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 21l1.5-10h3L15 21Zm3-10L5 4m7 7l7-7m-7 7l-7 7m7-7l7 7");
}
</style><path class="zmr_a4-cr"/>`,
		"fallback": "uix:windmill-traditional",
	});
}

export default Component;
