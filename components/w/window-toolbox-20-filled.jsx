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
		"content": `<style>.gl-20nbwm {
  fill: currentColor;
  d: path("M12 16.5a.5.5 0 0 0 1 0V16h3v.5a.5.5 0 0 0 1 0V16h2v1.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V16h2zM14 3a3 3 0 0 1 3 3v3.502a2.5 2.5 0 0 0-1-.45V7H4v7a2 2 0 0 0 2 2h3v1H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm1.5 7a1.5 1.5 0 0 1 1.5 1.5v.5h.5a1.5 1.5 0 0 1 1.5 1.5V15h-2v-.5a.5.5 0 0 0-1 0v.5h-3v-.5a.5.5 0 0 0-1 0v.5h-2v-1.5a1.5 1.5 0 0 1 1.5-1.5h.5v-.5a1.5 1.5 0 0 1 1.5-1.5zm-2 1a.5.5 0 0 0-.5.5v.5h3v-.5a.5.5 0 0 0-.5-.5z");
}
</style><path class="gl-20nbwm"/>`,
		"fallback": "fluent:window-toolbox-20-filled",
	});
}

export default Component;
