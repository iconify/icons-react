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
		"content": `<style>.l7zqybbds {
  d: path("M13.5 6.5h4v4h-4Zm0 7h4v4h-4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z0xktr-7d {
  d: path("M2.5 2.5h19v19h-19Zm7 0v19");
}
</style><g class="ulnmmdpxh"><path class="z0xktr-7d"/><path class="l7zqybbds"/></g>`,
		"fallback": "uix-sharp:window-sensor",
	});
}

export default Component;
