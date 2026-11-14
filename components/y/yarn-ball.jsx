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
		"content": `<style>.btme-9eav {
  d: path("M5.75 6.5c4.75 1 8.75 5 9.75 10M9 3c5 1.5 9 5.5 10.5 9m-12 4.75C6.5 20 9 21.5 12 20.5s5 1 8.5-.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v_-mc7bkx {
  d: path("M4.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}
</style><g class="ulnmmdpxh"><path class="v_-mc7bkx"/><path class="btme-9eav"/></g>`,
		"fallback": "uix-sharp:yarn-ball",
	});
}

export default Component;
