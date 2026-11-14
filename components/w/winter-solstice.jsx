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
		"content": `<style>.wbzbvvieb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 17.5a7 7 0 0 1 14 0m-16.5 0h19M12 7.5v-3m7 6l1.75-1.75M5 10.5L3.25 8.75");
}
</style><path class="wbzbvvieb"/>`,
		"fallback": "uix-sharp:winter-solstice",
	});
}

export default Component;
