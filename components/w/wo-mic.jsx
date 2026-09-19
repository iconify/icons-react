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
		"content": `<style>.dr18h6byf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5a8.503 8.503 0 0 1 8.503 8.503v10.512A8.503 8.503 0 0 1 24 32.017h0a8.503 8.503 0 0 1-8.503-8.502V13.003A8.503 8.503 0 0 1 24 4.5");
}

.rkz4pmrct {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.855 26.045a13.387 13.387 0 0 0 26.29 0M24 36.898V43.5m-13.145 0h26.29");
}
</style><path class="dr18h6byf"/><path class="rkz4pmrct"/>`,
		"fallback": "arcticons:wo-mic",
	});
}

export default Component;
