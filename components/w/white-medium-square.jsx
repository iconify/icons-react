import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ueq0-m88d {
  fill: currentColor;
  d: path("M54 10v44H10V10zm2-2H8v48h48z");
}
</style><path class="ueq0-m88d"/>`,
		"fallback": "emojione-monotone:white-medium-square",
	});
}

export default Component;
