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
		"content": `<style>.lxg5rsbkd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21V4m0 4L7 3m5 5 5 -5m-5 10L7 8m5 5 5 -5m-5 10 -5 -5m5 5 5 -5");
}
</style><path class="lxg5rsbkd"/>`,
		"fallback": "iconmind:wheat-outline-regular",
	});
}

export default Component;
