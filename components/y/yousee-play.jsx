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
		"content": `<style>.ehv-tz0cz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.5 38h19M30 22.5l-10-5.773v11.546z");
}

.y13mbbbss {
  width: 39px;
  height: 25px;
  x: 4.5px;
  y: 10px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
  ry: 2px;
}
</style><rect class="y13mbbbss"/><path class="ehv-tz0cz"/>`,
		"fallback": "arcticons:yousee-play",
	});
}

export default Component;
