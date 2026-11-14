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
		"content": `<style>.mb4jf8bul {
  d: path("M2.5 9.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0ZM9 16v5m-5.5 0H14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v5ltheq1q {
  d: path("M7.5 9.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm8 0V18a2.5 2.5 0 0 0 5 0v-1.5");
}
</style><g class="ulnmmdpxh"><path class="mb4jf8bul"/><path class="v5ltheq1q"/></g>`,
		"fallback": "uix-sharp:winding-engine",
	});
}

export default Component;
