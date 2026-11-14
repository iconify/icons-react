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
		"content": `<style>.r_bpazbbk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.102 12.286L5.4 10.358l7.071 8.426l-2.298 1.929Zm8.427-7.07l2.298-1.929l7.071 8.427l-2.298 1.928Zm-2.593 9.355l6.128-5.142m-11.107 9.32L6.638 16.5m10.724-9l2.681-2.249");
}
</style><path class="r_bpazbbk"/>`,
		"fallback": "uix-sharp:weightlifter",
	});
}

export default Component;
