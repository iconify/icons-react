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
		"content": `<style>.oefchzvvu {
  d: path("M2.5 17.5a9.5 3.5 0 0 0 19 0m-19 0a9.5 3.5 0 0 1 5-3m9 0a9.5 3.5 0 0 1 5 3M7.5 3h9v14.5h-9Z");
}

.pkf7mzb8s {
  d: path("m12.75 6.5l-2.25 4h3l-2.25 4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oefchzvvu"/><path class="pkf7mzb8s"/></g>`,
		"fallback": "uix-sharp:wireless-charger",
	});
}

export default Component;
