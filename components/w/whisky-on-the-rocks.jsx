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
		"content": `<style>.ck38ppfsa {
  d: path("M2.5 4h19l-1.75 15q-.25 2-2.25 2h-11q-2 0-2.25-2ZM4 16.25h16");
}

.jtpo8fbat {
  d: path("m5.937 9.805l3.758-1.368l1.368 3.758l-3.758 1.368Zm7.691-3.122l3.939.695l-.695 3.939l-3.939-.695Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ck38ppfsa"/><path class="jtpo8fbat"/></g>`,
		"fallback": "uix-sharp:whisky-on-the-rocks",
	});
}

export default Component;
