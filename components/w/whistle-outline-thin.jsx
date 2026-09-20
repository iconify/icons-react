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

.jf0dusbyh {
  d: path("M16 10h5v3h-5");
}

.nyo0sgxgn {
  d: path("M9 6c4 0 7 3 7 7 0 3 -3 6 -7 6s-6 -3 -6 -6c0 -4 2 -7 6 -7");
}

.oewjtrp_y {
  d: path("M7 13a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="hntgybcog"><path class="nyo0sgxgn"/><path class="oewjtrp_y"/><path class="jf0dusbyh"/></g>`,
		"fallback": "iconmind:whistle-outline-thin",
	});
}

export default Component;
