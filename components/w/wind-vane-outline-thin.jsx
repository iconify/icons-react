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
		"content": `<style>.az1hpy9gr {
  d: path("M12 9v12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l0v-b4kbr {
  d: path("M8 12h8");
}

.t6hbaucfr {
  d: path("m6 6 3 -3h3v6H9Z");
}

.xslfg2evh {
  d: path("M6 21h12");
}
</style><g class="hntgybcog"><path class="az1hpy9gr"/><path class="xslfg2evh"/><path class="t6hbaucfr"/><path class="l0v-b4kbr"/></g>`,
		"fallback": "iconmind:wind-vane-outline-thin",
	});
}

export default Component;
