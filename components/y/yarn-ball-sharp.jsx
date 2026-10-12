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
		"content": `<style>.ql-bjpb9n {
  cx: 11.5px;
  cy: 11.5px;
  r: 8.75px;
}

.r43_4nmqd {
  d: path("M6 5.25c3.25 2 5.75 7 5 15m-.25-17.4c3 1.75 6.25 6 6.75 11.5M2.95 12.5c2.75.25 6 1.75 8.3 4M17 18.25l2.571 3h1.679");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="ql-bjpb9n"/><path class="r43_4nmqd"/></g>`,
		"fallback": "iconoven:yarn-ball-sharp",
	});
}

export default Component;
