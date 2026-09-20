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
		"content": `<style>.bso0bbbqi {
  d: path("M21 8A9 9 0 0 1 3 8");
}

.hiqcqfbaf {
  d: path("M12 8v10");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vhnbtvbtn {
  d: path("M3 8h18");
}

.yb0sj-xar {
  d: path("M12 18a2 2 0 0 1 -4 0");
}
</style><g class="s0phu2bbs"><path class="bso0bbbqi"/><path class="vhnbtvbtn"/><path class="hiqcqfbaf"/><path class="yb0sj-xar"/></g>`,
		"fallback": "iconmind:wind-umbrella-outline-bold",
	});
}

export default Component;
