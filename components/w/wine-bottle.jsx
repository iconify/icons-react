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
		"content": `<style>.ffqzan0by {
  d: path("M9.5 13.25h5v4h-5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wg8attq4c {
  d: path("M10.25 2.75h3.5v4.5c0 1 .5 1.5 1.5 2.5s1.5 1.75 1.5 3v6.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2v-6.5c0-1.25.5-2 1.5-3s1.5-1.5 1.5-2.5Z");
}
</style><g class="hntgybcog"><path class="wg8attq4c"/><path class="ffqzan0by"/></g>`,
		"fallback": "iconoven:wine-bottle",
	});
}

export default Component;
