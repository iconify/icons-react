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

.f2r_tfb-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.47 26.68l-3.71-11.047m5.62 16.735L24 15.633m1.91 5.687l3.71 11.047l5.62-16.735");
}
</style><circle class="cpk0fnbgt"/><path class="f2r_tfb-k"/>`,
		"fallback": "arcticons:whoop",
	});
}

export default Component;
