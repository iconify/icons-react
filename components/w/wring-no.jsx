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
		"content": `<style>.b7h43dbrh {
  d: path("M3 16.5c2.531 0 3.78-2.306 4.916-4.583M11.45 7.56A2.5 2.5 0 0 1 12 7.5c2.123 0 3.119 2.534 4.334 4.913m4.044 4.038A4 4 0 0 0 21 16.5m-18-9v9m18-9v9M3.5 3.5l17 17");
}

.d5b4j1gny {
  d: path("M3 7.5q.344 0 .657.055m3.978 3.97C8.864 13.922 9.859 16.5 12 16.5q.252 0 .484-.046m3.568-4.308C17.196 9.848 18.446 7.5 21 7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="d5b4j1gny"/><path class="b7h43dbrh"/></g>`,
		"fallback": "uix-sharp:wring-no",
	});
}

export default Component;
