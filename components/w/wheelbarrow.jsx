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

.keov1bbdj {
  cx: 14px;
  cy: 17.5px;
  r: 2.75px;
}

.lw31uabhe {
  d: path("M4.5 7.75h15q1.25 0 .63 1.09l-2.76 4.82q-.62 1.09-1.87 1.09h-7q-1.25 0-1.87-1.09L3.87 8.84q-.62-1.09.63-1.09m.25 0L2.75 5m5.5 9.75l-.75 5.5");
}
</style><g class="hntgybcog"><path class="lw31uabhe"/><circle class="keov1bbdj"/></g>`,
		"fallback": "iconoven:wheelbarrow",
	});
}

export default Component;
