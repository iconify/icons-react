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
		"content": `<style>.lsk84s32m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 8l-4 4c-.369.369.262 1 1 1h2a2 2 0 0 1 2 2v4c0 .738.631 1.369 1 1l8-8c.369-.369-.262-1-1-1h-2a2 2 0 0 1-2-2V5c0-.738-.631-1.369-1-1z");
}
</style><path class="lsk84s32m"/>`,
		"fallback": "coolicons:zap-duocolor-round",
	});
}

export default Component;
