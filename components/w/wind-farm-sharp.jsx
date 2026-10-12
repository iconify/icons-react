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
		"content": `<style>.hjiurgbii {
  cx: 8px;
  cy: 7.5px;
  r: 2px;
}

.ifs-v5bqs {
  cx: 17px;
  cy: 12px;
  r: 2px;
}

.s6sxszb2a {
  d: path("M8 5.5V2.75M6.27 8.5l-2.82 1.63M9.73 8.5l2.82 1.63M8 9.5v11.75");
}

.uja5h2b9z {
  d: path("M17 10V7.5M15.27 13l-1.95 1.13M18.73 13l1.95 1.13M17 14v7.25m-14.25 0h18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="hjiurgbii"/><path class="s6sxszb2a"/><circle class="ifs-v5bqs"/><path class="uja5h2b9z"/></g>`,
		"fallback": "iconoven:wind-farm-sharp",
	});
}

export default Component;
