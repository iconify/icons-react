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
		"content": `<style>.j3s9ivbxi {
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

.l8n1hmb2e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.101 14H19a5 5 0 0 0 0 10h3.101m7.149 12v-6l3.975 6v-6m-12.45 0l-1.5 6l-1.5-6l-1.5 6l-1.5-6");
}

.ll6y--bwo {
  width: 3.975px;
  height: 6px;
  x: 22.65px;
  y: 30px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.988px;
  ry: 1.988px;
}

.phoa8bcya {
  cx: 27px;
  cy: 19px;
  r: 7px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><rect class="j3s9ivbxi"/><circle class="phoa8bcya"/><path class="l8n1hmb2e"/><rect class="ll6y--bwo"/>`,
		"fallback": "arcticons:wooribank",
	});
}

export default Component;
