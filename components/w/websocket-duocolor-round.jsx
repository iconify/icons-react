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
		"content": `<style>.hyn4080vx {
  d: path("M3 3v18M21 3v18");
}

.k3t4pbsco {
  stroke-opacity: 0.4;
  d: path("M7 8h10m-3-3l3 3l-3 3m3 5H7m3-3l-3 3l3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="k3t4pbsco"/><path class="hyn4080vx"/></g>`,
		"fallback": "coolicons:websocket-duocolor-round",
	});
}

export default Component;
