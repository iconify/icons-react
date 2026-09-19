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
		"content": `<style>.o84it3bmf {
  cx: 32px;
  cy: 32px;
  r: 30px;
  fill: var(--svg-color--d0d0d0, #d0d0d0);
}
</style><circle class="o84it3bmf"/>`,
		"fallback": "emojione:white-circle",
	});
}

export default Component;
