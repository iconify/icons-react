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
		"content": `<style>.lwzquabos {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 7.5H11v14H3.5ZM5 2.75h4.5V7.5H5ZM9.5 5H14l1.75 2.5M14 20h7q0-3-2.25-3.25q.5-3.25-1.25-5.75q-1.75 2.5-1.25 5.75Q14 17 14 20Z");
}
</style><path class="lwzquabos"/>`,
		"fallback": "uix-sharp:whipped-cream-siphon",
	});
}

export default Component;
