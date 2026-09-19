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
		"content": `<style>.jto6_1bxk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.038 5.5h27.924l-27.924 37m3.868 0h24.056");
}
</style><path class="jto6_1bxk"/>`,
		"fallback": "arcticons:zinli",
	});
}

export default Component;
