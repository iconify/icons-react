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
		"content": `<style>.asikq4-pf {
  fill: currentColor;
  d: path("M8 20.5A1.5 1.5 0 0 1 9.5 19h5a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1 -1.5 1.5h-5A1.5 1.5 0 0 1 8 20.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.eu2so4bxo {
  d: path("M7 16a5 5 0 0 1 10 0");
}

.le41ikb_c {
  fill: currentColor;
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pemn838wn {
  d: path("M9 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vi-y66bgi {
  d: path("M8 20.5A1.5 1.5 0 0 1 9.5 19h5a1.5 1.5 0 0 1 1.5 1.5 1.5 1.5 0 0 1 -1.5 1.5h-5A1.5 1.5 0 0 1 8 20.5");
}
</style><g class="s0phu2bbs"><path class="le41ikb_c"/><path class="asikq4-pf"/><path class="pemn838wn"/><path class="eu2so4bxo"/><path class="vi-y66bgi"/></g>`,
		"fallback": "iconmind:worker-agent-duotone-bold",
	});
}

export default Component;
