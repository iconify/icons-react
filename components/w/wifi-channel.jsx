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
		"content": `<style>.fq9xtbbmu {
  d: path("M6.266 10.485a7 7 0 0 1 11.468 0m-8.601 2.007a3.5 3.5 0 0 1 5.734 0M12 14.5h.01m1.49 5H16m0 0a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.s2sivqp7v {
  d: path("M3.399 8.477a10.5 10.5 0 0 1 17.202 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s2sivqp7v"/><path class="fq9xtbbmu"/></g>`,
		"fallback": "uix-sharp:wifi-channel",
	});
}

export default Component;
