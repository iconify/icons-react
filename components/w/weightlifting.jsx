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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.km91eib2p {
  width: 2.75px;
  height: 4px;
  x: 18.5px;
  y: 2.75px;
  rx: 1px;
}

.o391p7bmy {
  width: 2.75px;
  height: 4px;
  x: 2.75px;
  y: 2.75px;
  rx: 1px;
}

.ug2k5qb5o {
  cx: 12px;
  cy: 8.75px;
  r: 1.25px;
}

.um1_pvxcn {
  d: path("M5.5 4.75h13m-12 0l2.5 6.5h6l2.5-6.5M12 10v5m0 0l-4.5 2L9 21.25M12 15l4.5 2l-1.5 4.25");
}
</style><g class="hntgybcog"><rect class="o391p7bmy"/><rect class="km91eib2p"/><path class="um1_pvxcn"/><circle class="ug2k5qb5o"/></g>`,
		"fallback": "iconoven:weightlifting",
	});
}

export default Component;
