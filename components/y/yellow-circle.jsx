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
		"content": `<style>.moacmzb6j {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--fdcb58, #fdcb58);
}
</style><circle class="moacmzb6j"/>`,
		"fallback": "twemoji:yellow-circle",
	});
}

export default Component;
