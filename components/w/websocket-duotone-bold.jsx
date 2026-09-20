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
		"content": `<style>.bkrxi4g3s {
  fill: currentColor;
  d: path("M15 8a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.bwxeoibzi {
  d: path("M15 8a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-3a2 2 0 0 1 -2 -2Z");
}

.g7esaduey {
  fill: currentColor;
  d: path("M2 8a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ikiprn9sq {
  d: path("M9 14h6");
}

.jtt8g10_o {
  d: path("M9 10h6");
}

.k-sgg11ok {
  d: path("M2 8a2 2 0 0 1 2 -2h3a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="g7esaduey"/><path class="bkrxi4g3s"/><path class="k-sgg11ok"/><path class="bwxeoibzi"/><path class="jtt8g10_o"/><path class="ikiprn9sq"/></g>`,
		"fallback": "iconmind:websocket-duotone-bold",
	});
}

export default Component;
