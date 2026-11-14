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
		"content": `<style>.cr5dk9tmf {
  d: path("m8.25 13.5l1.75-2l2 2m2-9c1-1.5 2.25-1.5 3.25 0s2.25 1.5 3.25 0M14 8c1-1.5 2.25-1.5 3.25 0s2.25 1.5 3.25 0");
}

.pteq0y1rp {
  d: path("M8.5 11c-2-2-4.75.5-4.75 5c0 2.25.5 4 2 4s2.75-1 2.75-2.5Zm3.25 0c2-2 4.75.5 4.75 5c0 2.25-.5 4-2 4s-2.75-1-2.75-2.5ZM10 6.75v4.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pteq0y1rp"/><path class="cr5dk9tmf"/></g>`,
		"fallback": "uix-sharp:wheezing",
	});
}

export default Component;
