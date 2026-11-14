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
		"content": `<style>.re3nbbcdl {
  d: path("M8.5 5v-.5A1.5 1.5 0 0 1 10 3h4a1.5 1.5 0 0 1 1.5 1.5V5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xl4f4br9g {
  d: path("M8.5 3h7v4.5h-7Zm-1.25 8l1.25 1.25L10.75 10m2.75 1.25h3m-9.25 4.5L8.5 17l2.25-2.25M13.5 16h3");
}
</style><g class="ulnmmdpxh"><path class="re3nbbcdl"/><path class="xl4f4br9g"/></g>`,
		"fallback": "uix-sharp:wellbeing-plan",
	});
}

export default Component;
