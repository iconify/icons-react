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
		"content": `<style>.bdew4_7fm {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.77 5.77L10 3h7l-4 7h5l-2 2m-3.5 3.5L7 21l2-9H6l.923-2.077M2 5l17 17");
}

.ft5dv1b6b {
  fill: none;
}

.h39f6dj9w {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 10L8.769 5.769L10 3h7Zm0 0h5l-2.5 2.5Zm-6.077-.077L12.5 15.5L7 21l2-9H6Z");
}
</style><g class="ft5dv1b6b"><path class="h39f6dj9w"/><path class="bdew4_7fm"/></g>`,
		"fallback": "coolicons:zap-alt-off-duotone-sharp",
	});
}

export default Component;
