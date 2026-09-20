import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r4mf2qotf {
  fill: currentColor;
  d: path("M144 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16m31.06-48.7a80 80 0 0 0-94.12 0a12 12 0 1 0 14.13 19.4a56 56 0 0 1 65.86 0a12 12 0 1 0 14.13-19.4");
}
</style><path class="r4mf2qotf"/>`,
		"fallback": "ph:wifi-low-bold",
	});
}

export default Component;
