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
		"content": `<style>.ldmwtnb6g {
  stroke-opacity: 0.4;
  d: path("M3 6h8v5H3Zm2 0V3h4v3m9 .667c-.667-1.334-3-1.334-3 .666S18 11 18 11s3-1.667 3-3.667s-2.333-2-3-.666");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s94j2acll {
  d: path("M3 15h18m-9 0v6m-4 0h8");
}
</style><g class="nrj6p8qat"><path class="ldmwtnb6g"/><path class="s94j2acll"/></g>`,
		"fallback": "coolicons:work-life-balance-duocolor-sharp",
	});
}

export default Component;
