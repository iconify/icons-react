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
		"content": `<style>.a85ua61ho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M19.133 35.683h18.15M7 5.5h28.683L5.5 35.683h5.035m18.332-23.366h-18.15M41 42.5H12.317L42.5 12.317h-5.035");
}
</style><path class="a85ua61ho"/>`,
		"fallback": "arcticons:zen-launcher",
	});
}

export default Component;
