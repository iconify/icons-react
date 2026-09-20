import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tzrvxn7px {
  fill: var(--svg-color--474747, #474747);
  d: path("M3 7.929h18l-6.6 8.143l-2.4-2.91l-2.4 2.91zm11.417 6l4.226-4.715H5.357l4.226 4.715L12 11.357z");
}
</style><path class="tzrvxn7px"/>`,
		"fallback": "token-branded:wiken",
	});
}

export default Component;
