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

.kzwat7b_w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.526 17.987l-3.007 12.026l-3.006-12.026l-3.007 12.026L13.5 17.987M28.487 24h3.92m2.093 6.013h-6.013V17.987H34.5");
}
</style><rect class="j3s9ivbxi"/><path class="kzwat7b_w"/>`,
		"fallback": "arcticons:wrestling-empire",
	});
}

export default Component;
