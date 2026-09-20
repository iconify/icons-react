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
		"content": `<style>.bos0j4biy {
  d: path("M3 21h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jf8si_b8r {
  d: path("M6 13 16 3l3 3L9 16Z");
}

.onmmgdbjv {
  d: path("m6 13 -2 2v3h3l2 -2");
}
</style><g class="hntgybcog"><path class="jf8si_b8r"/><path class="onmmgdbjv"/><path class="bos0j4biy"/></g>`,
		"fallback": "iconmind:writing-outline-thin",
	});
}

export default Component;
