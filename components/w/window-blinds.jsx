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

.rruwowb6k {
  width: 15.5px;
  height: 13px;
  x: 4.25px;
  y: 3.75px;
  rx: 1px;
}

.sz57t6b-v {
  d: path("M2.75 3.75h18.5");
}

.u6kw3w_ie {
  d: path("M4.25 8h15.5m-15.5 4.5h15.5m-3.25 4.25v4.5");
}
</style><g class="hntgybcog"><path class="sz57t6b-v"/><rect class="rruwowb6k"/><path class="u6kw3w_ie"/></g>`,
		"fallback": "iconoven:window-blinds",
	});
}

export default Component;
