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
		"content": `<style>.uvdq16byt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.144 13.303L15.697 43.5h15.565h-19.21L23.5 13.303h-8.824M27.144 4.5a8.804 8.804 0 0 1 8.804 8.804m-8.804-4.402a4.4 4.4 0 0 1 4.402 4.402");
}
</style><path class="uvdq16byt"/>`,
		"fallback": "arcticons:ztelink",
	});
}

export default Component;
