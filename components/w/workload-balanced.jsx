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
		"content": `<style>.vmn4l5btp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19M12 13l-4 7h8ZM3 4h5v9H3Zm13 0h5v9h-5ZM3 8.5h5m8 0h5");
}
</style><path class="vmn4l5btp"/>`,
		"fallback": "uix-sharp:workload-balanced",
	});
}

export default Component;
