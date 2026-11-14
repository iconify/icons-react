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
		"content": `<style>.fpnphkvft {
  d: path("M7.375 2.5h9.25A4.375 4.375 0 0 1 21 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 17.125V6.875A4.375 4.375 0 0 1 7.375 2.5M12 5v13.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l60tftbgq {
  d: path("M12 6.5c-2 0-5 .5-5 2.75m5 1.25c-2 0-5 .5-5 2.75m5 1.25c-2 0-5 .5-5 2.75M12 6.5c2 0 5 .5 5 2.75m-5 1.25c2 0 5 .5 5 2.75m-5 1.25c2 0 5 .5 5 2.75");
}
</style><g class="hntgybcog"><path class="fpnphkvft"/><path class="l60tftbgq"/></g>`,
		"fallback": "uix:xray-chest",
	});
}

export default Component;
