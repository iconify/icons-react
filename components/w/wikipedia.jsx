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
		"content": `<style>.sc8g56bdn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 11.07h7.3m4.99 0h5.52m21.19 0h-6.58m-4.84 0h-4.83m-7.7 0l10.53 25.86l10.11-25.86");
}

.w37cbd8vp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.67 11.07L18.23 36.93L8.15 11.07");
}
</style><path class="sc8g56bdn"/><path class="w37cbd8vp"/>`,
		"fallback": "arcticons:wikipedia",
	});
}

export default Component;
