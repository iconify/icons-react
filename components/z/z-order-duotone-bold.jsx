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
		"content": `<style>.kb4ca79fq {
  d: path("M4 5h16L6 19h16");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zwp1z3cdr {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 5h16L6 19h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="zwp1z3cdr"/><path class="kb4ca79fq"/></g>`,
		"fallback": "iconmind:z-order-duotone-bold",
	});
}

export default Component;
