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
		"content": `<style>.g7c03yz0u {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.548px;
  ry: 4.518px;
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

.m4z406y8o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39.409 19.482V24c0 2.495-2.036 4.517-4.548 4.517S30.313 26.495 30.313 24v-4.518m-12.626 0c0 2.495-2.036 4.518-4.548 4.518S8.59 21.977 8.59 19.482M13.139 24v4.518");
}
</style><rect class="j3s9ivbxi"/><ellipse class="g7c03yz0u"/><path class="m4z406y8o"/>`,
		"fallback": "arcticons:you-com",
	});
}

export default Component;
