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
		"content": `<style>.bu1vbtyoa {
  fill: var(--svg-color--e80813, #e80813);
  d: path("M6.375 3h11.25v2.25H6.375z");
}

.ft5dv1b6b {
  fill: none;
}

.x7-7l7bzm {
  fill: var(--svg-color--fff, #fff);
  fill-rule: evenodd;
  d: path("M6.375 6.375V21H9.75v-5.063h3.066c2.655 0 4.809-2.137 4.809-4.78c0-2.645-2.154-4.782-4.81-4.782zm3.375 6.643h2.38a1.87 1.87 0 0 0 1.872-1.862c0-1.03-.838-1.862-1.873-1.862H9.75z");
}
</style><g class="ft5dv1b6b"><path clip-rule="evenodd" class="x7-7l7bzm"/><path class="bu1vbtyoa"/></g>`,
		"fallback": "token-branded:xprt",
	});
}

export default Component;
