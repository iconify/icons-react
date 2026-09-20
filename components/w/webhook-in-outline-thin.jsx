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

.i50mf1njm {
  d: path("m7 9 3 3 -3 3");
}

.jcxg2bbvb {
  d: path("M2 12h8");
}

.n0hr0gbrt {
  d: path("M14 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.qw94a7xnn {
  d: path("M13 6.8a6 6 0 1 1 0 10.4");
}
</style><g class="hntgybcog"><path class="qw94a7xnn"/><path class="n0hr0gbrt"/><path class="jcxg2bbvb"/><path class="i50mf1njm"/></g>`,
		"fallback": "iconmind:webhook-in-outline-thin",
	});
}

export default Component;
