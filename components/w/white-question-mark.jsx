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
		"content": `<style>.hu633jevh {
  cx: 17px;
  cy: 32px;
  r: 3px;
  fill: var(--svg-color--ccd6dd, #ccd6dd);
}

.nrfn8e5ue {
  fill: var(--svg-color--ccd6dd, #ccd6dd);
  d: path("M17 27a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3c.603-.006 6-1 6-5c0-2-2-4-5-4c-2.441 0-4 2-4 3a3 3 0 1 1-6 0c0-4.878 4.58-9 10-9c8 0 11 5.982 11 11c0 4.145-2.277 7.313-6.413 8.92c-.9.351-1.79.587-2.587.747V24a3 3 0 0 1-3 3");
}
</style><path class="nrfn8e5ue"/><circle class="hu633jevh"/>`,
		"fallback": "twemoji:white-question-mark",
	});
}

export default Component;
