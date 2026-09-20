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
		"content": `<style>.f5ieidcch {
  d: path("M5 13v8");
}

.gr2yy8pwl {
  d: path("M8 13V6h9v7");
}

.pkf-n2b8h {
  d: path("M10 6a2.5 2.5 0 0 1 5 0");
}

.q40roytdv {
  d: path("M19 13v8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zugrvnb7t {
  d: path("M2 13h20");
}
</style><g class="s0phu2bbs"><path class="zugrvnb7t"/><path class="f5ieidcch"/><path class="q40roytdv"/><path class="gr2yy8pwl"/><path class="pkf-n2b8h"/></g>`,
		"fallback": "iconmind:workshop-outline-bold",
	});
}

export default Component;
