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
		"content": `<style>.bosg0j17c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.919 33.4l-13.949-.094l5.08-19.05h13.948");
}

.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.n9duku_ks {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.998 14.256c4.426 0 7.02 4.472 5.793 9.755S30.345 33.4 25.919 33.4M4.9 23.318h9.733");
}
</style><path class="bosg0j17c"/><path class="n9duku_ks"/><circle class="cpk0fnbgt"/>`,
		"fallback": "arcticons:zedge",
	});
}

export default Component;
