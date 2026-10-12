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
		"content": `<style>.gk-st3vho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.87 15.89a8 8 0 1 1 12.26 0l-3.64-3.05a3.25 3.25 0 1 0-4.98 0Zm.5-4.45v-1.38m1.16-2.8l.98-.98m2.8-1.16h1.38m2.8 1.16l.98.98m1.16 2.8v1.38M12 19l-3.5-2v4Zm0 0l3.5-2v4Z");
}
</style><path class="gk-st3vho"/>`,
		"fallback": "iconoven:wreath-door-sharp",
	});
}

export default Component;
