import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zdtxxnb1b {
  fill: var(--svg-color--e0e0e0, #e0e0e0);
  d: path("M50.04 50.04h27.91v27.92H50.04z");
}
</style><path class="zdtxxnb1b"/>`,
		"fallback": "noto-v1:white-small-square",
	});
}

export default Component;
