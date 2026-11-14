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
		"content": `<style>.ffqcobbxd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13c1-9 5-9 6 0c1-9 5-9 6 0c1-9 5-9 6 0M2.5 17.5h19");
}
</style><path class="ffqcobbxd"/>`,
		"fallback": "uix-sharp:whoops-section",
	});
}

export default Component;
