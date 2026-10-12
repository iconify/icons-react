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
		"content": `<style>.e9-7-8-2z {
  cx: 12px;
  cy: 4.75px;
  r: 2px;
}

.t2fzt3box {
  d: path("M6.5 9.25h2.75V14h5.5v-2a2.75 2.75 0 0 1 5.5 0v6.5a2.75 2.75 0 0 1-5.5 0v-2h-5.5v2a2.75 2.75 0 0 1-5.5 0V9.25zM12 14V6.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="t2fzt3box"/><circle class="e9-7-8-2z"/></g>`,
		"fallback": "iconoven:yo-yo-sharp",
	});
}

export default Component;
