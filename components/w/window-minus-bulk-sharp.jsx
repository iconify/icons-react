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
		"content": `<style>.amswakb3y {
  d: path("M3 7h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m6 7h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2");
}

.cuyn6tgcc {
  fill: currentColor;
}

.rufoxdbmp {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1");
}
</style><g class="cuyn6tgcc"><path class="rufoxdbmp"/><path class="amswakb3y"/></g>`,
		"fallback": "coolicons:window-minus-bulk-sharp",
	});
}

export default Component;
