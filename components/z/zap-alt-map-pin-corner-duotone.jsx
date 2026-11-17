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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.on_w1me4o {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.394 10H11a.58.58 0 0 1-.504-.868l3.008-5.264A.58.58 0 0 0 13 3H7.65a1 1 0 0 0-.914.594l-3.33 7.492A.65.65 0 0 0 4 12h1c.513 0 .894.475.783.976l-1.566 7.048c-.063.284.284.475.49.269l5.378-5.378M17 21c-1.5-1-3-3-3-5a3 3 0 0 1 6 0c0 2-1.5 4-3 5m0-5h.01");
}

.zj7elmbxg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 10h2.394a7 7 0 0 0-3.309 4.915l-5.378 5.378a.291.291 0 0 1-.49-.269l1.566-7.048A.803.803 0 0 0 5 12H4a.65.65 0 0 1-.594-.914l3.33-7.492C6.897 3.233 7.255 3 7.65 3H13a.58.58 0 0 1 .504.868l-3.008 5.264A.58.58 0 0 0 11 10m6 11c-1.574-1.051-2.999-3.053-3-5a3 3 0 1 1 6 0c-.001 1.947-1.426 3.949-3 5");
}
</style><g class="ft5dv1b6b"><path class="zj7elmbxg"/><path class="on_w1me4o"/></g>`,
		"fallback": "coolicons:zap-alt-map-pin-corner-duotone",
	});
}

export default Component;
