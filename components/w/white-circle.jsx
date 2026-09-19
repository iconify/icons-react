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
		"content": `<style>.epebgbx0r {
  cx: 32px;
  cy: 32px;
  r: 31px;
  fill: var(--svg-color--d0d2d3, #d0d2d3);
}
</style><circle class="epebgbx0r"/>`,
		"fallback": "emojione-v1:white-circle",
	});
}

export default Component;
