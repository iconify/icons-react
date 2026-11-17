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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.uz_rt1_6p {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m9.375 8.5l3.13-3.935A.699.699 0 0 1 13.75 5v3a2 2 0 0 0 2 2H17a.965.965 0 0 1 .755 1.565l-6.26 7.87A.699.699 0 0 1 10.25 19v-3a2 2 0 0 0-2-2H7a.965.965 0 0 1-.755-1.565Z");
}

.yt0hucbad {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9.375 8.5l-3.13 3.935A.965.965 0 0 0 7 14h1.25a2 2 0 0 1 2 2v3c0 .661.833.952 1.245.435l6.26-7.87A.965.965 0 0 0 17 10h-1.25a2 2 0 0 1-2-2V5c0-.661-.833-.952-1.245-.435z");
}
</style><g class="ft5dv1b6b"><path class="uz_rt1_6p"/><path class="yt0hucbad"/></g>`,
		"fallback": "coolicons:zap-duotone-round",
	});
}

export default Component;
