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
		"content": `<style>.ga8_tozvo {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 5h16L6 19h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kb4ca79fq {
  d: path("M4 5h16L6 19h16");
}
</style><g class="hntgybcog"><path class="ga8_tozvo"/><path class="kb4ca79fq"/></g>`,
		"fallback": "iconmind:z-order-duotone-thin",
	});
}

export default Component;
