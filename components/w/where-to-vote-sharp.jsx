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
		"content": `<style>.vmno7cber {
  fill: currentColor;
  d: path("M10.95 13.35L15.9 8.4l-1.425-1.425L10.95 10.5l-1.4-1.4l-1.425 1.425zM12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22");
}
</style><path class="vmno7cber"/>`,
		"fallback": "material-symbols:where-to-vote-sharp",
	});
}

export default Component;
