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
		"content": `<style>.l8ov_ebxb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.659 4.5a9.243 9.243 0 1 0 9.271 9.245v-.002A9.257 9.257 0 0 0 28.66 4.5ZM19.39 14.517zm-4.648 9.91a4.665 4.665 0 0 0-4.672 4.658a4.672 4.672 0 1 0 4.673-4.658Zm16.002 9.317a4.886 4.886 0 0 0-4.893 4.878a4.886 4.886 0 0 0 4.893 4.878a4.885 4.885 0 0 0 4.893-4.878a4.886 4.886 0 0 0-4.893-4.878m-16.01.005z");
}
</style><path class="l8ov_ebxb"/>`,
		"fallback": "arcticons:worksoft",
	});
}

export default Component;
