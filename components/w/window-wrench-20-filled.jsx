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
		"content": `<style>.pu8q2pb_z {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h2.049a2.5 2.5 0 0 1 .443-1H6a2 2 0 0 1-2-2V7h12v1.03h.007c.434.05.779.281.993.594V6a3 3 0 0 0-3-3zm6.168 10.7a3.518 3.518 0 0 1 3.724-4.676q.058.006.108.026a.39.39 0 0 1 .242.311a.49.49 0 0 1-.14.405l-.975.975a1.507 1.507 0 1 0 2.132 2.132l.975-.975c.261-.261.7-.156.742.21a3.518 3.518 0 0 1-4.676 3.723l-2.726 2.727a1.507 1.507 0 1 1-2.132-2.132z");
}
</style><path class="pu8q2pb_z"/>`,
		"fallback": "fluent:window-wrench-20-filled",
	});
}

export default Component;
