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
		"content": `<style>.bne1r35vq {
  fill: currentColor;
  d: path("M144 204a16 16 0 1 1-16-16a16 16 0 0 1 16 16");
}
</style><path class="bne1r35vq"/>`,
		"fallback": "ph:wifi-none-bold",
	});
}

export default Component;
