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
		"content": `<style>.zstg0ybsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 4l6.5 8l6.5-8M12 12v8.5M7.5 13h9m-9 3.5h9");
}
</style><path class="zstg0ybsi"/>`,
		"fallback": "uix:yen-sign",
	});
}

export default Component;
