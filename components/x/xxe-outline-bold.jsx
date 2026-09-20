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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.flr8fjbul {
  d: path("M10 9.5 7.5 12l2.5 2.5");
}

.q1w67xbec {
  d: path("m14 9.5 2.5 2.5 -2.5 2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v3qgglbcl {
  d: path("M12 9.5v5");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="flr8fjbul"/><path class="q1w67xbec"/><path class="v3qgglbcl"/></g>`,
		"fallback": "iconmind:xxe-outline-bold",
	});
}

export default Component;
