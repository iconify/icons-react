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
		"content": `<style>.zqsnszrqb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.85 3H13v3.5h-2v-1H3.25V3zM12 9l1.25 1.5v.7a1.25 1.25 0 0 1-2.5 0v-.7zm-9.25 5.75h18.5c0 3.75-3.75 6.5-9.25 6.5s-9.25-2.75-9.25-6.5Zm3.75 2.5h11");
}
</style><path class="zqsnszrqb"/>`,
		"fallback": "iconoven:wudu-water-sharp",
	});
}

export default Component;
