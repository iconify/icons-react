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
		"content": `<style>.hzjevbc4f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
  d: path("M12 21V3m0 4L7 2m5 5 5 -5m-5 9L7 6m5 5 5 -5m-5 9 -5 -5m5 5 5 -5");
}
</style><path class="hzjevbc4f"/>`,
		"fallback": "iconmind:yield-outline-bold",
	});
}

export default Component;
