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

.m1u1p6bxg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m7 10l-2 2c-.369.369-.369 1 0 1h4a1 1 0 0 1 1 1v6c0 .369.631.369 1 0l3-3m3-3l2-2c.369-.369.369-1 0-1h-4a1 1 0 0 1-1-1V4c0-.369-.631-.369-1 0l-3 3M2 5l17 17");
}

.y57vpl4bn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m17 14l-7-7l3-3c.369-.369 1-.369 1 0v6a1 1 0 0 0 1 1h4c.369 0 .369.631 0 1Zm-6 6c-.369.369-1 .369-1 0v-6a1 1 0 0 0-1-1H5c-.369 0-.369-.631 0-1l2-2l7 7Z");
}
</style><g class="ft5dv1b6b"><path class="y57vpl4bn"/><path class="m1u1p6bxg"/></g>`,
		"fallback": "coolicons:zap-off-duotone",
	});
}

export default Component;
