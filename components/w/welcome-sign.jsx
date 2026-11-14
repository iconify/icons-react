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
		"content": `<style>.a0ld8q6fw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5V4A1.5 1.5 0 0 1 4 2.5h5A1.5 1.5 0 0 1 10.5 4v17.5m2.75-12.75h8.25v7.5h-8.25Zm-5.5 3.75h.01m5.49-10V6m0-1.75h8.25m-5.75 0v4.5m3.5-4.5v4.5");
}
</style><path class="a0ld8q6fw"/>`,
		"fallback": "uix-sharp:welcome-sign",
	});
}

export default Component;
