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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q3jop5grj {
  cx: 7px;
  cy: 5.25px;
  r: 2.5px;
}

.tq0ogqbac {
  cx: 17px;
  cy: 5.25px;
  r: 2.5px;
}

.xe5j2gbzm {
  d: path("M7 7.75v3.5a5 5 0 0 0 5 5v5m5-13.5v3.5a5 5 0 0 1-5 5");
}
</style><g class="hntgybcog"><circle class="q3jop5grj"/><circle class="tq0ogqbac"/><path class="xe5j2gbzm"/></g>`,
		"fallback": "iconoven:wired-earphones",
	});
}

export default Component;
