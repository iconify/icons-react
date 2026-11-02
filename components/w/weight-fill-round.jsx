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
		"content": `<style>.l_36zccwl {
  fill: currentColor;
  d: path("M14.803 7.071c1.426.257 2.68 1.217 3.146 2.613l2 6c.635 1.906-.259 3.95-2.033 4.858A4.16 4.16 0 0 1 16 21H8a4.16 4.16 0 0 1-1.916-.458c-1.774-.908-2.668-2.952-2.033-4.858l2-6c.228-.683.581-1.327 1.093-1.839C7.637 7.352 8.29 7 9 7h.171a3 3 0 1 1 5.632.071m-3.51-1.778a.999.999 0 1 0 1.414 1.414a.999.999 0 1 0-1.414-1.414");
}
</style><path class="l_36zccwl"/>`,
		"fallback": "coolicons:weight-fill-round",
	});
}

export default Component;
