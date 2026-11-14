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

.sjrjyobpx {
  fill: currentColor;
  d: path("M7.5 8.5h2A1.5 1.5 0 0 1 11 10v2a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 6 12v-2a1.5 1.5 0 0 1 1.5-1.5m12 2.5za1.25 1.25 0 0 1 1.25 1.25a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 19.5 11");
}

.yg78hn7yc {
  d: path("M2 15h20m-8.732 2.758l.279.441a1.5 1.5 0 0 1-1.268 2.301h-.558a1.5 1.5 0 0 1-1.268-2.301l.279-.441a1.5 1.5 0 0 1 2.536 0");
}
</style><g class="hntgybcog"><path class="yg78hn7yc"/><path class="sjrjyobpx"/></g>`,
		"fallback": "uix:weighted-average",
	});
}

export default Component;
