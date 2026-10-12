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
		"content": `<style>.gcw17wuuq {
  width: 7.5px;
  height: 4.5px;
  x: 8.25px;
  y: 9px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hsts5rbmz {
  d: path("M11 11.25h2");
}

.xv8-tn3dv {
  d: path("M5.25 9v12.25M18.75 9v12.25M5.25 17h13.5");
}

.z9xt8iyeh {
  width: 18.5px;
  height: 3.5px;
  x: 2.75px;
  y: 5.5px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="z9xt8iyeh"/><path class="xv8-tn3dv"/><rect class="gcw17wuuq"/><path class="hsts5rbmz"/></g>`,
		"fallback": "iconoven:workbench",
	});
}

export default Component;
