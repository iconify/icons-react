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
		"content": `<style>.nirj1m4jo {
  d: path("M2.5 2.5h19v19h-19Zm0 6h19M10 4.5h.01m1.99 0h.01m1.99 0h.01M10 6.5h.01m1.99 0h.01m1.99 0h.01");
}

.o3ql2gbur {
  d: path("M6.5 18a5.5 5.5 0 0 1 11 0M12 18l2.5-3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nirj1m4jo"/><path class="o3ql2gbur"/></g>`,
		"fallback": "uix-sharp:widget-gauge",
	});
}

export default Component;
