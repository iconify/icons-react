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
		"content": `<style>.b7haryzrg {
  fill: var(--svg-color--d0d2d3, #d0d2d3);
  d: path("M63.998 57.1a6.9 6.9 0 0 1-6.897 6.903h-50.2A6.9 6.9 0 0 1 .005 57.1V6.9A6.9 6.9 0 0 1 6.901 0h50.2a6.897 6.897 0 0 1 6.897 6.9z");
}
</style><path class="b7haryzrg"/>`,
		"fallback": "emojione-v1:white-large-square",
	});
}

export default Component;
