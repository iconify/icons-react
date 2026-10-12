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
		"content": `<style>.e-3qpsbwy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.25V11m0 0L7 4.5m5 6.5l5-6.5m-10 0Q3.625 5.25 3.25 15M9.5 7.75c-1.5 1.25-2 3.75-2 9M17 4.5q3.375.75 3.75 10.5M14.5 7.75c1.5 1.25 2 3.75 2 9");
}
</style><path class="e-3qpsbwy"/>`,
		"fallback": "iconoven:willow-sharp",
	});
}

export default Component;
