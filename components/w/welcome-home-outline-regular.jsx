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
		"content": `<style>.a6e_o0bju {
  d: path("m3 11 9 -9 9 9");
}

.dvfmj91gv {
  d: path("M6 11v10h12V11");
}

.frsaaq3rt {
  d: path("M10 21v-6h4v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u8xyemu8s {
  d: path("M9 7a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0l-3 3Z");
}
</style><g class="nrj6p8qat"><path class="a6e_o0bju"/><path class="dvfmj91gv"/><path class="frsaaq3rt"/><path class="u8xyemu8s"/></g>`,
		"fallback": "iconmind:welcome-home-outline-regular",
	});
}

export default Component;
