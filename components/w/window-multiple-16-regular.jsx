import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dk6-v2b9y {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v5A2.5 2.5 0 0 0 4.5 12h5A2.5 2.5 0 0 0 12 9.5v-5A2.5 2.5 0 0 0 9.5 2zm6.415 2h-7.83A1.5 1.5 0 0 1 4.5 3h5a1.5 1.5 0 0 1 1.415 1M3 5h8v4.5A1.5 1.5 0 0 1 9.5 11h-5A1.5 1.5 0 0 1 3 9.5zm3.5 9a2.5 2.5 0 0 1-2-1H10a3 3 0 0 0 3-3V4.5c.607.456 1 1.182 1 2V10a4 4 0 0 1-4 4z");
}
</style><path class="dk6-v2b9y"/>`,
		"fallback": "fluent:window-multiple-16-regular",
	});
}

export default Component;
