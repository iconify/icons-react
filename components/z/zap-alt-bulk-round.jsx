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
		"content": `<style>.rpgqs3b0x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m13.707 15.707l-4.586 4.586a1.582 1.582 0 0 1-2.663-1.462l1.24-5.584A.202.202 0 0 0 7.5 13a1.974 1.974 0 0 1-1.805-2.777l2.863-6.441A3 3 0 0 1 11.3 2H15a2.162 2.162 0 0 1 1.876 3.233L14.861 8.76A.16.16 0 0 0 15 9h1a1.827 1.827 0 0 1 1.293 3.121Z");
}
</style><path class="rpgqs3b0x"/>`,
		"fallback": "coolicons:zap-alt-bulk-round",
	});
}

export default Component;
