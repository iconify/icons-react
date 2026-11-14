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
		"content": `<style>.fpz1nu2ys {
  d: path("M8 16h8l-1 5.5H9Zm4-5.5V16M4 6.5l8 4l8-4");
}

.p79pbwb0f {
  d: path("m8 2.5l4 8l4-8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="fpz1nu2ys"/><path class="p79pbwb0f"/></g>`,
		"fallback": "uix-sharp:yucca",
	});
}

export default Component;
