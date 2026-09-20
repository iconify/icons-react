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
		"content": `<style>.z87sbhijy {
  fill: currentColor;
  d: path("M140 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12m32.71-45.47a76.05 76.05 0 0 0-89.42 0a8 8 0 0 0 9.42 12.94a60 60 0 0 1 70.58 0a8 8 0 1 0 9.42-12.94");
}
</style><path class="z87sbhijy"/>`,
		"fallback": "ph:wifi-low",
	});
}

export default Component;
