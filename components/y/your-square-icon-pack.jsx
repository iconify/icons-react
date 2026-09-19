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

.yon34v20y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.27 18.605L24 24.216l5.729-5.611");
}

.zjdz6lb-r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.52 16.695a12 12 0 1 1-2.215-2.215M24 24.217v7.936");
}
</style><rect class="j3s9ivbxi"/><path class="zjdz6lb-r"/><path class="yon34v20y"/>`,
		"fallback": "arcticons:your-square-icon-pack",
	});
}

export default Component;
