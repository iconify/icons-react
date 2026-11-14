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
		"content": `<style>.jmd0hgb9p {
  d: path("m5.5 12.5l4-1.5l5 1.5l4-1.5v6.5l-4 1.5l-5-1.5l-4 1.5Zm4-1.5v6.5m5-5V19");
}

.nirj1m4jo {
  d: path("M2.5 2.5h19v19h-19Zm0 6h19M10 4.5h.01m1.99 0h.01m1.99 0h.01M10 6.5h.01m1.99 0h.01m1.99 0h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nirj1m4jo"/><path class="jmd0hgb9p"/></g>`,
		"fallback": "uix-sharp:widget-map",
	});
}

export default Component;
