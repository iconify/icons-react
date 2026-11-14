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
		"content": `<style>.gew__pb0n {
  d: path("M5.625 4h12.75A2.625 2.625 0 0 1 21 6.625v10.75A2.625 2.625 0 0 1 18.375 20H5.625A2.625 2.625 0 0 1 3 17.375V6.625A2.625 2.625 0 0 1 5.625 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wv432xbvm {
  d: path("M12 6.75za1.5 1.5 0 0 1 1.5 1.5v7.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-7.5a1.5 1.5 0 0 1 1.5-1.5M3 10h4.5m9 4H21");
}
</style><g class="hntgybcog"><path class="gew__pb0n"/><path class="wv432xbvm"/></g>`,
		"fallback": "uix:window-arrow-slit",
	});
}

export default Component;
