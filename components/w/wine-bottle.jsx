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
		"content": `<style>.rpj5ebbfs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 3h4v6.5q3 1 3 4V20a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 7 20v-6.5q0-3 3-4Zm0 3.5h4");
}
</style><path class="rpj5ebbfs"/>`,
		"fallback": "uix-sharp:wine-bottle",
	});
}

export default Component;
