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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.mefrlbb7y {
  d: path("M7.75 17.25L9.25 10h5.5l1.5 7.25Z");
}

.ptvu1u_4n {
  cx: 12px;
  cy: 8px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="dbgvcxwad"/><circle class="ptvu1u_4n"/><path class="mefrlbb7y"/></g>`,
		"fallback": "iconoven:weight-limit-sharp",
	});
}

export default Component;
