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
		"content": `<style>.nrvmg4baa {
  fill: currentColor;
  d: path("M46 18v28H18V18zm2-2H16v32h32z");
}
</style><path class="nrvmg4baa"/>`,
		"fallback": "emojione-monotone:white-small-square",
	});
}

export default Component;
