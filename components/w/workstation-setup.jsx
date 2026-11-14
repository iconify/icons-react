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
		"content": `<style>.cj1t8gb6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h17v11h-17Zm8.5 11v2m-2.5 0h5M2.5 18h13v3.5h-13Zm15-.5H21v4h-3.5Z");
}
</style><path class="cj1t8gb6c"/>`,
		"fallback": "uix-sharp:workstation-setup",
	});
}

export default Component;
