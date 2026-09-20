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
		"content": `<style>.gfk1uw7pu {
  d: path("M9 8q3 3 6 0");
}

.hx8itjbwv {
  fill: currentColor;
  d: path("M7 4h10v4c0 4 -2 6 -5 6s-5 -2 -5 -6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.i-2dnzb7m {
  d: path("M12 14v6");
}

.qw7b_6b1t {
  d: path("M8 20h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xycf6-bdn {
  d: path("M7 4h10v4c0 4 -2 6 -5 6s-5 -2 -5 -6Z");
}
</style><g class="s0phu2bbs"><path class="hx8itjbwv"/><path class="xycf6-bdn"/><path class="i-2dnzb7m"/><path class="qw7b_6b1t"/><path class="gfk1uw7pu"/></g>`,
		"fallback": "iconmind:wine-tasting-duotone-bold",
	});
}

export default Component;
