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
		"content": `<style>.adc5w46wu {
  d: path("M3.5 20.5V13c0-5 4-7.5 8.5-7.5S20.5 8 20.5 13v7.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xqrf9bb2q {
  d: path("M9.5 20.5V15h5v5.5M12 5.5V3");
}
</style><g class="hntgybcog"><path class="adc5w46wu"/><path class="xqrf9bb2q"/></g>`,
		"fallback": "uix:yurt",
	});
}

export default Component;
