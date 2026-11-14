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
		"content": `<style>.fqpzchb7w {
  d: path("M12 5.5c0-1.5.75-2.25 2.25-2.5m0 0c1.25 2 3.5 2.75 5.75 2c-1.25-2-3.5-2.75-5.75-2Zm-5 18.75L12 19.5l2.75 2.25");
}

.t-15u7fqp {
  d: path("M6.5 12.5a5.5 7 0 1 0 11 0a5.5 7 0 1 0-11 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t-15u7fqp"/><path class="fqpzchb7w"/></g>`,
		"fallback": "uix-sharp:wild-rose-hip",
	});
}

export default Component;
