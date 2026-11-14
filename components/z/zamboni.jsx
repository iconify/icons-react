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
		"content": `<style>.n5znybcvu {
  d: path("M4.5 19a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm9 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z3htdkbgc {
  d: path("M2.5 9h19v7.5h-19Zm4 0V4.5h7L16 9");
}
</style><g class="ulnmmdpxh"><path class="z3htdkbgc"/><path class="n5znybcvu"/></g>`,
		"fallback": "uix-sharp:zamboni",
	});
}

export default Component;
