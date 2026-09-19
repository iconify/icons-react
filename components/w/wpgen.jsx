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
		"content": `<style>.hhdgd2kwg {
  cx: 31.32px;
  cy: 16.59px;
  r: 4.47px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.wofwrqq6s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.5 5.5h-5c-2.216 0-4 1.784-4 4v5m37 0v-5c0-2.216-1.784-4-4-4h-5m-28 28v5c0 2.216 1.784 4 4 4h5m19 0h5c2.216 0 4-1.784 4-4v-5M20 21l7.22 7.22a.7.7 0 0 0 .99.01l1.39-1.39a.71.71 0 0 1 1 0l7.81 7.81a.7.7 0 0 1-.5 1.2H10.08a.7.7 0 0 1-.58-1.1L19 21.13a.7.7 0 0 1 .98-.146z");
}
</style><path class="wofwrqq6s"/><circle class="hhdgd2kwg"/>`,
		"fallback": "arcticons:wpgen",
	});
}

export default Component;
