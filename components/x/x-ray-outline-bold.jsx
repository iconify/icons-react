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
		"content": `<style>.fufp8hb7p {
  d: path("m10 8 -4 4");
}

.gs502ibny {
  d: path("m14 8 4 4");
}

.j05_so5ho {
  d: path("M3 16a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.pfpu_3ppl {
  d: path("M12 8v4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w08657bnd {
  d: path("M9 5a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="s0phu2bbs"><path class="j05_so5ho"/><path class="w08657bnd"/><path class="fufp8hb7p"/><path class="pfpu_3ppl"/><path class="gs502ibny"/></g>`,
		"fallback": "iconmind:x-ray-outline-bold",
	});
}

export default Component;
