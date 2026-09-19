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
		"content": `<style>.edq4z5z_f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21 28v11.5a3 3 0 1 0 6 0V25.242l14.621-14.62a3 3 0 0 0-4.242-4.243L19.758 24L6.378 10.621a3 3 0 0 1 4.243-4.242l11.38 11.379");
}
</style><path class="edq4z5z_f"/>`,
		"fallback": "arcticons:yamiyami",
	});
}

export default Component;
