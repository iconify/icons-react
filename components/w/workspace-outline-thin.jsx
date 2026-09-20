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

.mnt4e8bcf {
  d: path("M9 11h13");
}

.okg0-qwlz {
  d: path("M4.5 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.t87ohzbeq {
  d: path("M9 4v16");
}

.tkgsjrp5m {
  d: path("M4.5 8a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}
</style><g class="hntgybcog"><path class="vyks9vbfn"/><path class="t87ohzbeq"/><path class="mnt4e8bcf"/><path class="tkgsjrp5m"/><path class="okg0-qwlz"/></g>`,
		"fallback": "iconmind:workspace-outline-thin",
	});
}

export default Component;
