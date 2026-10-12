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
		"content": `<style>.y4v2-7hdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 2.75h18.5v13H2.75zM6.5 7h7m-7 3.5h4m4.75 1.5l2.5-2.5M8 15.75l-2 5.5m10-5.5l2 5.5m-6-5.5v5.5");
}
</style><path class="y4v2-7hdp"/>`,
		"fallback": "iconoven:whiteboard-sharp",
	});
}

export default Component;
