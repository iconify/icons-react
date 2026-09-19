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
		"content": `<style>.czr4y8bpv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.36 27.991V20l3.999 8l4-7.988V28M19.64 20l-2 8l-2-8l-2 8l-2-8");
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

.roc-r3u7m {
  width: 5.3px;
  height: 8px;
  x: 20.994px;
  y: 20px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.65px;
  ry: 2.65px;
}
</style><rect class="j3s9ivbxi"/><path class="czr4y8bpv"/><rect class="roc-r3u7m"/>`,
		"fallback": "arcticons:wom",
	});
}

export default Component;
