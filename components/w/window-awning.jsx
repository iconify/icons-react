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
		"content": `<style>.fq1iv4bjw {
  d: path("m5 3l-2 9.5h18L19 3m-7 9.5v9");
}

.twr18dlsx {
  d: path("M5 3h14v18.5H5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="twr18dlsx"/><path class="fq1iv4bjw"/></g>`,
		"fallback": "uix-sharp:window-awning",
	});
}

export default Component;
