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
		"content": `<style>.t12zocbsm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 4l6.5 8l6.5-8M12 12v8.5M7.5 13h9m-9 3.5h9");
}
</style><path class="t12zocbsm"/>`,
		"fallback": "uix-sharp:yen-sign",
	});
}

export default Component;
