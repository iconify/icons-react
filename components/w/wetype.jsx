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
		"content": `<style>.px05azbfp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.2 8.586h1.354c5.173 0 8.661 3.666 7.821 8.22s-5.682 8.222-10.855 8.222H5.5M24.747 8.587l-8.719 30.827");
}
</style><path class="px05azbfp"/>`,
		"fallback": "arcticons:wetype",
	});
}

export default Component;
