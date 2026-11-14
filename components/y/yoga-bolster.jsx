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
		"content": `<style>.cgesaib3l {
  d: path("M3.5 10.25a2.5 4 0 1 0 5 0a2.5 4 0 1 0-5 0Zm-1 7.25h19");
}

.kpptmb-qf {
  d: path("M6 6.25h12a2.5 4 0 0 1 0 8H6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="kpptmb-qf"/><path class="cgesaib3l"/></g>`,
		"fallback": "uix-sharp:yoga-bolster",
	});
}

export default Component;
