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
		"content": `<style>.eseyp7btj {
  d: path("M15.5 12.5v3l-2 1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mdswc-b6o {
  cx: 9px;
  cy: 9px;
  r: 6.25px;
}

.req4htxyv {
  cx: 15.5px;
  cy: 15.5px;
  r: 5.75px;
}

.yj4rhqsqh {
  d: path("M9 5.5V9h2.5");
}
</style><g class="hntgybcog"><circle class="mdswc-b6o"/><path class="yj4rhqsqh"/><circle class="req4htxyv"/><path class="eseyp7btj"/></g>`,
		"fallback": "iconoven:world-clock",
	});
}

export default Component;
