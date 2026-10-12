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
		"content": `<style>.e9-7-8-2z {
  cx: 12px;
  cy: 4.75px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zi44ax22d {
  d: path("M6.5 9.25A2.75 2.75 0 0 1 9.25 12v2h5.5v-2a2.75 2.75 0 0 1 5.5 0v6.5a2.75 2.75 0 0 1-5.5 0v-2h-5.5v2a2.75 2.75 0 0 1-5.5 0V12A2.75 2.75 0 0 1 6.5 9.25M12 14V6.75");
}
</style><g class="hntgybcog"><path class="zi44ax22d"/><circle class="e9-7-8-2z"/></g>`,
		"fallback": "iconoven:yo-yo",
	});
}

export default Component;
