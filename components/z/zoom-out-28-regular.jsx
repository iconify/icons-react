import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.c-5vd1byf {
  fill: currentColor;
  d: path("M11.5 2a9.5 9.5 0 0 1 9.5 9.5a9.46 9.46 0 0 1-2.275 6.164l6.055 6.056a.75.75 0 1 1-1.06 1.06l-6.056-6.055A9.46 9.46 0 0 1 11.5 21a9.5 9.5 0 0 1 0-19m0 1.5a8 8 0 1 0 0 16a8 8 0 0 0 0-16m3.75 7.25a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5z");
}
</style><path class="c-5vd1byf"/>`,
		"fallback": "fluent:zoom-out-28-regular",
	});
}

export default Component;
