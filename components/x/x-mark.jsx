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
		"content": `<style>.ccqyc3e8o {
  d: path("M19.5 4.5q-6 6.5-15 15");
}

.jh868ndmt {
  d: path("M4.5 4.5q6 6.5 15 15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="jh868ndmt"/><path class="ccqyc3e8o"/></g>`,
		"fallback": "uix-sharp:x-mark",
	});
}

export default Component;
