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

.hyej5rbam {
  cx: 9.25px;
  cy: 14.25px;
  r: 2.25px;
}

.lvvh3abpj {
  d: path("M13.5 5.25L14.75 3m2.5 2.5L18 3.25");
}

.yn6c4kk4c {
  d: path("M9.25 8h10.5a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-4.38a6.25 6.25 0 1 1-6.12-5");
}
</style><g class="hntgybcog"><path class="yn6c4kk4c"/><circle class="hyej5rbam"/><path class="lvvh3abpj"/></g>`,
		"fallback": "iconoven:whistle",
	});
}

export default Component;
