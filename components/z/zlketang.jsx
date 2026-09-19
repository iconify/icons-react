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
		"content": `<style>.h8odqzuek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M7.15 5.5h20.74l-19.27 37m32.23 0H20.11l19.268-37");
}
</style><path class="h8odqzuek"/>`,
		"fallback": "arcticons:zlketang",
	});
}

export default Component;
