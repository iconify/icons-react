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
		"content": `<style>.aagx-xbzq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3a2 9 0 1 0 0 18a2 9 0 1 0 0-18m6.5 4a1.5 5 0 1 0 0 10a1.5 5 0 1 0 0-10m5.5 2.5a1 2.5 0 1 0 0 5a1 2.5 0 1 0 0-5");
}

.of2c3hfex {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3q7 4.75 12 6.5M4.75 21q7-4.75 12-6.5");
}

.y2zq3gb5i {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 12h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="aagx-xbzq"/><path class="of2c3hfex"/><path class="y2zq3gb5i"/></g>`,
		"fallback": "iconoven:wormhole",
	});
}

export default Component;
