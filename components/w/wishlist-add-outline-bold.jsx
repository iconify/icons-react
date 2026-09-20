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
		"content": `<style>.jlz27obmi {
  d: path("M10 12h4v6l-2 -2 -2 2Z");
}

.oz3eccbug {
  d: path("M7 8a5 5 0 0 1 10 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vo1-lv2pt {
  d: path("M3 10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="vo1-lv2pt"/><path class="oz3eccbug"/><path class="jlz27obmi"/></g>`,
		"fallback": "iconmind:wishlist-add-outline-bold",
	});
}

export default Component;
