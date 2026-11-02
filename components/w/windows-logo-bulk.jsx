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

.jb35w8bqn {
  d: path("M13 18a1 1 0 0 1-2 0v-5H3a1 1 0 0 1 0-2h8V6a1 1 0 0 1 2 0v5h8a1 1 0 0 1 0 2h-8Z");
}

.s_79-200p {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m2.89 6.006l18-2A1 1 0 0 1 22 5v14a1 1 0 0 1-1.11.994l-18-2A1 1 0 0 1 2 17V7a1 1 0 0 1 .89-.994");
}
</style><g class="cuyn6tgcc"><path class="s_79-200p"/><path class="jb35w8bqn"/></g>`,
		"fallback": "coolicons:windows-logo-bulk",
	});
}

export default Component;
