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
		"content": `<style>.bsrt7iseb {
  d: path("M6.5 12.5a5.5 7 0 1 0 11 0a5.5 7 0 1 0-11 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v95_yxb5p {
  d: path("M12 5.5c0-1.5.75-2.25 2.25-2.5m0 0c1.25 2 3.5 2.75 5.75 2c-1.25-2-3.5-2.75-5.75-2m-5 18.75L12 19.5l2.75 2.25");
}
</style><g class="hntgybcog"><path class="bsrt7iseb"/><path class="v95_yxb5p"/></g>`,
		"fallback": "uix:wild-rose-hip",
	});
}

export default Component;
