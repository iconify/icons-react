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
		"content": `<style>.ju2ll-m2d {
  d: path("M3.5 8h17L19 21.5H5ZM6 8V5a2.25 2.25 0 0 1 4.5 0v3m3 0V5A2.25 2.25 0 0 1 18 5v3");
}

.rv4w--jmr {
  d: path("M12 18.5c-1.75-1.25-3.25-2.5-3.25-4.25C8.75 13 9.75 12 11 12c.5 0 .75.25 1 .75c.25-.5.5-.75 1-.75c1.25 0 2.25 1 2.25 2.25c0 1.75-1.5 3-3.25 4.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ju2ll-m2d"/><path class="rv4w--jmr"/></g>`,
		"fallback": "uix-sharp:welcome-kit",
	});
}

export default Component;
