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
		"content": `<style>.va-3-fl0w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 15h18m-9 0v6m-4 0h8M3 8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm2-2V4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2m9 .667c-.667-1.334-3-1.334-3 .666S18 11 18 11s3-1.667 3-3.667s-2.333-2-3-.666");
}
</style><path class="va-3-fl0w"/>`,
		"fallback": "coolicons:work-life-balance-round",
	});
}

export default Component;
