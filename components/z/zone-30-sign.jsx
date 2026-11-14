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
		"content": `<style>.oeucrxbku {
  d: path("M3.5 2.5h17v19h-17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yqwjc9b7y {
  d: path("M6.5 7h4.25l-2 3a2.25 2.25 0 1 1-1.5 3.75M13.75 7h3.75v7.5h-3.75ZM7 18h10");
}
</style><g class="ulnmmdpxh"><path class="oeucrxbku"/><path class="yqwjc9b7y"/></g>`,
		"fallback": "uix-sharp:zone-30-sign",
	});
}

export default Component;
