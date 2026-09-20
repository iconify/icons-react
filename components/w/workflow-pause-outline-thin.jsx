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
		"content": `<style>.f21or-k3k {
  d: path("M2 4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.gujomac1p {
  d: path("M6 10v6h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mlfk3xi6j {
  d: path("M18 10v10");
}

.wqwx994ue {
  d: path("M14 10v10");
}
</style><g class="hntgybcog"><path class="f21or-k3k"/><path class="gujomac1p"/><path class="wqwx994ue"/><path class="mlfk3xi6j"/></g>`,
		"fallback": "iconmind:workflow-pause-outline-thin",
	});
}

export default Component;
