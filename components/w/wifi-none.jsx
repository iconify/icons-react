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
		"content": `<style>.or11-532u {
  fill: currentColor;
  d: path("M140 204a12 12 0 1 1-12-12a12 12 0 0 1 12 12");
}
</style><path class="or11-532u"/>`,
		"fallback": "ph:wifi-none",
	});
}

export default Component;
