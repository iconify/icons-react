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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qukzw2x-r {
  d: path("m12.5 15.5l-4.793 4.793c-.206.206-.553.015-.49-.27l1.566-7.047A.802.802 0 0 0 8 12H7a.65.65 0 0 1-.594-.914l.517-1.163M8.77 5.77l.967-2.175A1 1 0 0 1 10.65 3H16a.58.58 0 0 1 .504.868l-3.008 5.264A.58.58 0 0 0 14 10h3c.369 0 .554.446.293.707L16 12");
}

.sr6trvpei {
  stroke-opacity: 0.4;
  d: path("m2 5l17 17");
}
</style><g class="nrj6p8qat"><path class="sr6trvpei"/><path class="qukzw2x-r"/></g>`,
		"fallback": "coolicons:zap-alt-off-duocolor",
	});
}

export default Component;
