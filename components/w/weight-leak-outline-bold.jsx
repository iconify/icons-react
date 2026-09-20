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
		"content": `<style>.c3a-odz8a {
  d: path("M12 18.5V21");
}

.f8t1_w8ci {
  d: path("M14 3h3a3 3 0 0 1 3 3v4a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V6l3 -3h3");
}

.jj-3-pb6g {
  d: path("M8 16v2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wbwra8boi {
  d: path("M16 16v2.5");
}
</style><g class="s0phu2bbs"><path class="f8t1_w8ci"/><path class="jj-3-pb6g"/><path class="c3a-odz8a"/><path class="wbwra8boi"/></g>`,
		"fallback": "iconmind:weight-leak-outline-bold",
	});
}

export default Component;
