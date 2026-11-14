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
		"content": `<style>.nlaq1-bus {
  d: path("M10.5 17.75a1.5 3.75 0 1 0 3 0a1.5 3.75 0 1 0-3 0Zm-2.25 0h7.5");
}

.pjahc7pbp {
  d: path("M10 2.5h4v6h-4Zm-4.5 6h13V11h-13Zm2.75 9.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pjahc7pbp"/><path class="nlaq1-bus"/></g>`,
		"fallback": "uix-sharp:work-permit",
	});
}

export default Component;
