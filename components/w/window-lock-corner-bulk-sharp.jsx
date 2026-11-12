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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ixmbu2v_y {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 3h18a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H9v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1");
}

.ylmtqhbjn {
  d: path("M3 7h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m17 8h1a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h1a3 3 0 1 1 6 0m-4 0h2a1 1 0 0 0-2 0");
}
</style><g class="cuyn6tgcc"><path class="ixmbu2v_y"/><path class="ylmtqhbjn"/></g>`,
		"fallback": "coolicons:window-lock-corner-bulk-sharp",
	});
}

export default Component;
