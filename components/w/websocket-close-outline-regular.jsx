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
		"content": `<style>.aoxrbobxu {
  d: path("M14 8h4");
}

.fcstqn4mf {
  d: path("M18 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ktpncgb0v {
  d: path("M10 16H6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qrln8gb_a {
  d: path("M18 16h-4");
}

.sjot3p-qh {
  d: path("M6 8h4");
}

.zuquf0b8s {
  d: path("M2 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="nrj6p8qat"><path class="zuquf0b8s"/><path class="fcstqn4mf"/><path class="sjot3p-qh"/><path class="aoxrbobxu"/><path class="qrln8gb_a"/><path class="ktpncgb0v"/></g>`,
		"fallback": "iconmind:websocket-close-outline-regular",
	});
}

export default Component;
