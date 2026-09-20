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
		"content": `<style>.g3dgjwbxu {
  fill: currentColor;
  d: path("M138 204a10 10 0 1 1-10-10a10 10 0 0 1 10 10");
}
</style><path class="g3dgjwbxu"/>`,
		"fallback": "ph:wifi-none-light",
	});
}

export default Component;
