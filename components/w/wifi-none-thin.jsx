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
		"content": `<style>.n_zx_4w6b {
  fill: currentColor;
  d: path("M136 204a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="n_zx_4w6b"/>`,
		"fallback": "ph:wifi-none-thin",
	});
}

export default Component;
