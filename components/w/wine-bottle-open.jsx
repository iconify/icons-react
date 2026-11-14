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
		"content": `<style>.bav890cqm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.5h3V7q2.5 2 2.5 5v8q0 1.5-1.5 1.5H6q-1.5 0-1.5-1.5v-8q0-3 2.5-5Zm8.041 13.932l5.438-2.536l1.48 3.172l-5.438 2.536ZM4.5 14.5h8");
}
</style><path class="bav890cqm"/>`,
		"fallback": "uix-sharp:wine-bottle-open",
	});
}

export default Component;
