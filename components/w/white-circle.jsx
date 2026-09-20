import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kb8v6gg9n {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--e6e7e8, #e6e7e8);
}
</style><circle class="kb8v6gg9n"/>`,
		"fallback": "twemoji:white-circle",
	});
}

export default Component;
