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
		"content": `<style>.apo90stin {
  width: 39px;
  height: 25.755px;
  x: 4.5px;
  y: 11.123px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.4px;
  ry: 3.4px;
}

.rdjjz031d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.457 36.878c1.115 0 1.816-1.28 1.247-2.236h.001L14.901 13.136c-.569-.956-.903-2.013-2.018-2.013");
}
</style><path class="rdjjz031d"/><rect class="apo90stin"/>`,
		"fallback": "arcticons:zandaka-kakunin",
	});
}

export default Component;
