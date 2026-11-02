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
		"content": `<style>.bgbshn1il {
  d: path("M3 7h18a1 1 0 0 1 0 2h-5v11a1 1 0 0 1-2 0V9H3a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.ucmn5_ber {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5 21a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3Z");
}
</style><g class="cuyn6tgcc"><path class="ucmn5_ber"/><path class="bgbshn1il"/></g>`,
		"fallback": "coolicons:window-sidebar-right-bulk",
	});
}

export default Component;
