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
		"content": `<style>.e55u7qbis {
  d: path("M9 3.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM10.5 8v4H16l1.75 3.5");
}

.qxqw3_bzs {
  d: path("M11.75 9.103a4.5 4.5 0 1 1-6.147 6.147M2.5 22l19-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e55u7qbis"/><path class="qxqw3_bzs"/></g>`,
		"fallback": "uix-sharp:wheelchair-boarding",
	});
}

export default Component;
