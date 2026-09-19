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
		"content": `<style>.bvw7flzcp {
  cx: 35.521px;
  cy: 27.575px;
  r: 0.75px;
  fill: currentColor;
}

.h00kamb8n {
  cx: 32.303px;
  cy: 27.575px;
  r: 0.75px;
  fill: currentColor;
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.lvdzz_bqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 36.526H21c1.703 0 2.345 1.497 3 2.55c.645-1.025 1.303-2.55 3-2.55h15.5m-2.846-8.202c0 2.613-3.024 5.011-6.41 5.011a5.1 5.1 0 0 1-2.385-.372l-1.749.823l.164-1.743c-1.45-.725-1.92-2.786-1.88-3.72c.113-2.61 2.745-4.731 6.13-4.731s6.13 2.119 6.13 4.732");
}
</style><rect class="j3s9ivbxi"/><path class="lvdzz_bqr"/><circle class="h00kamb8n"/><circle class="bvw7flzcp"/>`,
		"fallback": "arcticons:weread",
	});
}

export default Component;
