import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ib9vgacph {
  fill: currentColor;
  d: path("M10 3a8 8 0 0 1 8 8a5 5 0 0 1-3 4.583V16a2 2 0 0 0 2 2h.5a.5.5 0 0 1 0 1H17a3 3 0 0 1-3-3v-.1q-.486.099-1 .1h-1a3 3 0 1 1 3-3v1.463A4 4 0 0 0 17 11a7 7 0 1 0-14 0v.5A2.5 2.5 0 0 0 5.5 14H7a.5.5 0 0 1 0 1H5.5A3.5 3.5 0 0 1 2 11.5V11a8 8 0 0 1 8-8m2 8a2 2 0 1 0 0 4h1q.519-.002 1-.126V13a2 2 0 0 0-2-2");
}
</style><path class="ib9vgacph"/>`,
		"fallback": "fluent:work-iq-20-regular",
	});
}

export default Component;
