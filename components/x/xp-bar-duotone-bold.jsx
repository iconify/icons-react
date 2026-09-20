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
		"content": `<style>.haqmubngg {
  fill: currentColor;
  d: path("M3 10h18v10H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mb3fb7bkl {
  d: path("M17 10v10");
}

.mh_3yqm3z {
  d: path("M3 10h18v10H3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tdul-wdwn {
  d: path("m9 6 3 -3 3 3");
}
</style><g class="s0phu2bbs"><path class="haqmubngg"/><path class="mh_3yqm3z"/><path class="mb3fb7bkl"/><path class="tdul-wdwn"/></g>`,
		"fallback": "iconmind:xp-bar-duotone-bold",
	});
}

export default Component;
