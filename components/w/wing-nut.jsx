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
		"content": `<style>.grwnm7rmh {
  d: path("M8.5 12h7v6h-7Z");
}

.jkjz5bc5f {
  d: path("M8.5 15C5.5 15 3 11 3 6.5c3.5 1 6 3 6.5 5.5m6 3c3 0 5.5-4 5.5-8.5c-3.5 1-6 3-6.5 5.5M12 18v2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="grwnm7rmh"/><path class="jkjz5bc5f"/></g>`,
		"fallback": "uix-sharp:wing-nut",
	});
}

export default Component;
