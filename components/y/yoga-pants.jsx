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
		"content": `<style>.rpdhx5boi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12V6H6ZM7 6l.5 15.5h2.75l1.75-11l1.75 11h2.75L17 6");
}
</style><path class="rpdhx5boi"/>`,
		"fallback": "uix-sharp:yoga-pants",
	});
}

export default Component;
