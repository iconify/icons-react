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
		"content": `<style>.l3hbskbwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.553 11.221v24.273c0 2.216-1.784 4-4 4H10.774");
}

.mmcv3qb9t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 27.006L24 8.506l18.5 18.5");
}

.pscdx3bwd {
  cx: 24px;
  cy: 27.934px;
  r: 6px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wq5_62bzd {
  cx: 26px;
  cy: 25.934px;
  r: 1.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="l3hbskbwk"/><circle class="pscdx3bwd"/><circle class="wq5_62bzd"/><path class="mmcv3qb9t"/>`,
		"fallback": "arcticons:xmeye",
	});
}

export default Component;
