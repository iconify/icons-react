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
		"content": `<style>.gkhdp4bho {
  d: path("M4.5 9q0-4 4-4q0 4-4 4Z");
}

.jky2v4bad {
  d: path("M3 9h12a3 3 0 1 0-3-3m-9 9h14.5a3 3 0 1 1-3 3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jky2v4bad"/><path class="gkhdp4bho"/></g>`,
		"fallback": "uix-sharp:wind-gentle-breeze",
	});
}

export default Component;
