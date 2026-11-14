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
		"content": `<style>.moa1ljxyy {
  d: path("M5.5 8.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0ZM12 15v2.75M8 21.5l1.5-3.75h5L16 21.5Z");
}

.ni7ev6mom {
  d: path("M9.25 8.5a2.75 6.5 0 1 0 5.5 0a2.75 6.5 0 1 0-5.5 0Zm-3.75 0h13");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="moa1ljxyy"/><path class="ni7ev6mom"/></g>`,
		"fallback": "uix-sharp:world-cup-globe",
	});
}

export default Component;
