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

.etcad4b9c {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 4v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1");
}
</style><g class="cuyn6tgcc"><path class="etcad4b9c"/><path class="bgbshn1il"/></g>`,
		"fallback": "coolicons:window-sidebar-right-bulk-sharp",
	});
}

export default Component;
