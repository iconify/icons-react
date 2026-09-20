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
		"content": `<style>.sdd03o8jg {
  fill: var(--svg-color--e0e0e0, #e0e0e0);
  d: path("M23 23h82v82H23z");
}
</style><path class="sdd03o8jg"/>`,
		"fallback": "noto-v1:white-medium-square",
	});
}

export default Component;
