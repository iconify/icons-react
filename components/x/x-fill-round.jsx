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
		"content": `<style>.wjdw1nwta {
  fill: currentColor;
  d: path("M4 3h4a1 1 0 0 1 .8.4l5.2 6.933L19.2 3.4a1 1 0 1 1 1.6 1.2L15.25 12l5.55 7.4A.999.999 0 0 1 20 21h-4a1 1 0 0 1-.8-.4L10 13.667L4.8 20.6a1 1 0 0 1-1.6-1.2L8.75 12L3.2 4.6A.999.999 0 0 1 4 3");
}
</style><path class="wjdw1nwta"/>`,
		"fallback": "coolicons:x-fill-round",
	});
}

export default Component;
