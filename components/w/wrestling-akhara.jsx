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
		"content": `<style>.hdeen9b5c {
  d: path("m7 10l5 2.25L17 10M2.75 21h18.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nrw5thixb {
  cx: 17px;
  cy: 5px;
  r: 2px;
}

.vx_xyyw4c {
  cx: 7px;
  cy: 5px;
  r: 2px;
}

.yskvo2bnb {
  d: path("M7 7.75V14l-2.25 4.75M7 14l2.25 4.75m7.75-11V14l-2.25 4.75M17 14l2.25 4.75");
}
</style><g class="hntgybcog"><circle class="vx_xyyw4c"/><circle class="nrw5thixb"/><path class="yskvo2bnb"/><path class="hdeen9b5c"/></g>`,
		"fallback": "iconoven:wrestling-akhara",
	});
}

export default Component;
