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
		"content": `<style>.iejxo-b0t {
  d: path("M13.376 14.623C14.0924 14.8582 14.7672 15.2815 15.3337 15.8929");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pn5tqtb4p {
  d: path("M8.66699 15.893C9.2104 15.3065 9.85347 14.8931 10.5374 14.6528");
}

.zj2p4py0y {
  stroke-linejoin: round;
  d: path("M12.0176 19.4644H12.0177");
}
</style><g class="ipq1z-bjh"><path class="zj2p4py0y"/><path class="pn5tqtb4p"/><path class="iejxo-b0t"/></g>`,
		"fallback": "solar:wi-fi-low-broken",
	});
}

export default Component;
