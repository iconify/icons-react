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

.q3b6j7bvq {
  d: path("M20 10c2 0 2 -4 -1 -4");
}

.vt8fxebuz {
  d: path("M4 10h16l-6 6h-4Z");
}
</style><g class="hntgybcog"><path class="vt8fxebuz"/><path class="q3b6j7bvq"/></g>`,
		"fallback": "iconmind:wok-outline-thin",
	});
}

export default Component;
