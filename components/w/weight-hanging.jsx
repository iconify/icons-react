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
		"content": `<style>.as0dksq9v {
  d: path("M6 2.5h12m-6 0V6M9.75 8.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wfs5gnbco {
  d: path("M9 10.5h6l3.5 10h-13Z");
}
</style><g class="ulnmmdpxh"><path class="as0dksq9v"/><path class="wfs5gnbco"/></g>`,
		"fallback": "uix-sharp:weight-hanging",
	});
}

export default Component;
