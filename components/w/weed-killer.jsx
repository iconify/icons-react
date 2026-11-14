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
		"content": `<style>.cjy1i_bre {
  d: path("M5 10h9v11.5H5Zm1.5 0V4.5h9V7H12v3");
}

.cuibgebzi {
  d: path("M8 18.5c0-3 1.25-5 3.25-5c0 3-1.25 5-3.25 5ZM18.75 4h.01m-.01 3.5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cjy1i_bre"/><path class="cuibgebzi"/></g>`,
		"fallback": "uix-sharp:weed-killer",
	});
}

export default Component;
