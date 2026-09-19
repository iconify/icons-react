import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ev3obd1po {
  cx: 20.323px;
  cy: 19.15px;
  r: 0.75px;
  fill: currentColor;
}

.o74_23b1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.323 21.55v5.4m2.4-2c0 1.1.9 2 2 2h0c1.1 0 2-.9 2-2v-1.3c0-1.1-.9-2-2-2h0c-1.1 0-2 .9-2 2m0-2.1v8");
}

.p1hlsucjd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.923 21.55l-1.7 5.4l-1.6-5.4l-1.6 5.4l-1.7-5.4m23.354 5.4c-1.1 0-2-.9-2-2v-1.3c0-1.1.9-2 2-2h0c1.1 0 2 .9 2 2v1.3c0 1.1-.9 2-2 2m-5.754-3.4c0-1.1.9-2 2-2m-2 0v5.4");
}
</style><circle class="cpk0fnbgt"/><path class="p1hlsucjd"/><circle class="ev3obd1po"/><path class="o74_23b1l"/>`,
		"fallback": "arcticons:wipro-next-smart-home",
	});
}

export default Component;
