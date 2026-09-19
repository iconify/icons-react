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
		"content": `<style>.jfz0do0fq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M30.962 34.858L43.5 13.142H18.425z");
}

.t387u7b_i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m17.038 34.858l12.537-21.716H4.5z");
}
</style><path class="jfz0do0fq"/><path class="t387u7b_i"/>`,
		"fallback": "arcticons:wikireader",
	});
}

export default Component;
