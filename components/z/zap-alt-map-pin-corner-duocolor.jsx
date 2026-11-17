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
		"content": `<style>.a1mbuxbpb {
  stroke-opacity: 0.4;
  d: path("M17 21c-1.5-1-3-3-3-5a3 3 0 0 1 6 0c0 2-1.5 4-3 5m0-5h.01");
}

.ggdhpub-s {
  d: path("M13.394 10H11a.58.58 0 0 1-.504-.868l3.008-5.264A.58.58 0 0 0 13 3H7.65a1 1 0 0 0-.914.594l-3.33 7.492A.65.65 0 0 0 4 12h1c.513 0 .894.475.783.976l-1.566 7.048c-.063.284.284.475.49.269l5.378-5.378");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="a1mbuxbpb"/><path class="ggdhpub-s"/></g>`,
		"fallback": "coolicons:zap-alt-map-pin-corner-duocolor",
	});
}

export default Component;
