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
		"content": `<style>.t8jnq2bua {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 16V9.5C11 6.75 12.75 5 15 5s3.75 1.75 3.5 4.25m0 0C20.75 10 21.5 12 20 14c-2-.75-2.75-2.75-1.5-4.75M11 10c-2.25-.25-4 .75-4.75 3c2.25.25 4-.75 4.75-3m-5.5 6h11l-1.15 4.35a1.25 1.25 0 0 1-1.2.9h-6.3a1.25 1.25 0 0 1-1.2-.9Z");
}
</style><path class="t8jnq2bua"/>`,
		"fallback": "iconoven:wilted-flower",
	});
}

export default Component;
