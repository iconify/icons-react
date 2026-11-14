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
		"content": `<style>.djqthtavr {
  d: path("M8.111 14.611a5.5 5.5 0 0 1 7.778 0M4.222 10.722a11 11 0 0 1 15.556 0");
}

.tribtvy6q {
  fill: currentColor;
  d: path("M10.5 18.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="djqthtavr"/><path class="tribtvy6q"/></g>`,
		"fallback": "uix-sharp:wifi-medium",
	});
}

export default Component;
