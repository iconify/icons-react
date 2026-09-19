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

.lauahabzz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.1 42.4c.7-4 1.7-4.9 2.8-6.3c14.231 2.699 21.061-6.827 21.5-26.8C29.8 18 21.5 18.3 16 24c-3.3 4-4.2 8-2.1 12.1");
}
</style><rect class="j3s9ivbxi"/><path class="lauahabzz"/>`,
		"fallback": "arcticons:yggdrasil",
	});
}

export default Component;
