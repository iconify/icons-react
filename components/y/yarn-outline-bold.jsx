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
		"content": `<style>.hna3ob3gq {
  d: path("M9 4.5C13 7 17 11 19 15");
}

.nrlkc9bnf {
  d: path("M4 12a8 8 0 1 0 16 0 8 8 0 1 0 -16 0");
}

.ocxbfzbxf {
  d: path("M12 20c2 1 4 0 5 1");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wkb1-ccil {
  d: path("M5 9c4 2 8 6 10 10");
}
</style><g class="s0phu2bbs"><path class="nrlkc9bnf"/><path class="wkb1-ccil"/><path class="hna3ob3gq"/><path class="ocxbfzbxf"/></g>`,
		"fallback": "iconmind:yarn-outline-bold",
	});
}

export default Component;
