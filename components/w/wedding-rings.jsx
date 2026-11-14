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
		"content": `<style>.szfc0db-v {
  d: path("M9 10.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.uanjqbn8t {
  d: path("M3 13.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="uanjqbn8t"/><path class="szfc0db-v"/></g>`,
		"fallback": "uix-sharp:wedding-rings",
	});
}

export default Component;
