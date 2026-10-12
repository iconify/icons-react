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
		"content": `<style>.qsm8r14by {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.75 3.75l16.5 16.5");
}

.rhj7-w4rz {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 18.5h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.zmx14_y_k {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.82 15.32a4.5 4.5 0 0 1 6.36 0m-9.54-3.18a9 9 0 0 1 12.72 0M2.81 9.31a13 13 0 0 1 18.38 0");
}
</style><g class="y9tr6bcfx"><path class="zmx14_y_k"/><path class="rhj7-w4rz"/><path class="qsm8r14by"/></g>`,
		"fallback": "iconoven:wifi-off",
	});
}

export default Component;
