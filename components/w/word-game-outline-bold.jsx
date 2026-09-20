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
		"content": `<style>.gszsvr09c {
  d: path("M14 6v12h7V6Z");
}

.izycrzbmp {
  d: path("M16 14h3");
}

.s_sj9bjbj {
  d: path("m4.5 14 2 -2 2 2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.xyvnrdm2l {
  d: path("M3 6v12h7V6Z");
}
</style><g class="s0phu2bbs"><path class="xyvnrdm2l"/><path class="gszsvr09c"/><path class="s_sj9bjbj"/><path class="izycrzbmp"/></g>`,
		"fallback": "iconmind:word-game-outline-bold",
	});
}

export default Component;
