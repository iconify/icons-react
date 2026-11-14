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
		"content": `<style>.sbztrcp3n {
  d: path("M15.5 3.75V7A1.5 1.5 0 0 0 17 8.5h3.25M4.5 19.5L12 12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vi-y5jnwu {
  d: path("M20.25 8.5a4.75 4.75 0 1 1-4.75-4.75");
}
</style><g class="ulnmmdpxh"><path class="vi-y5jnwu"/><path class="sbztrcp3n"/></g>`,
		"fallback": "uix-sharp:wrench",
	});
}

export default Component;
