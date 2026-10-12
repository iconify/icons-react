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

.j0-zzccxe {
  d: path("m7 11l3 4m0-4l-3 4m5.5 0v-4H14a1.25 1.25 0 0 1 0 2.5h-1.5m6.75-10.75Q19.46 4.29 21 4.5q-1.54.21-1.75 1.75q-.21-1.54-1.75-1.75q1.54-.21 1.75-1.75");
}

.wkns6cb-k {
  cx: 11px;
  cy: 13px;
  r: 7.5px;
}
</style><g class="hntgybcog"><circle class="wkns6cb-k"/><path class="j0-zzccxe"/></g>`,
		"fallback": "iconoven:xp-orb",
	});
}

export default Component;
