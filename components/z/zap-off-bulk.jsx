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

.p76o-3bag {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16.275 15.032L8.826 7.584l3.519-4.424A1.35 1.35 0 0 1 14.75 4v5H18a1.483 1.483 0 0 1 1.16 2.405Zm-1.88 2.363l-2.74 3.445A1.35 1.35 0 0 1 9.25 20v-5H6a1.483 1.483 0 0 1-1.16-2.405l2.107-2.648Z");
}

.scc1kvjkf {
  d: path("m2.707 4.293l17 17a.999.999 0 1 1-1.414 1.414l-17-17a.999.999 0 1 1 1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="p76o-3bag"/><path class="scc1kvjkf"/></g>`,
		"fallback": "coolicons:zap-off-bulk",
	});
}

export default Component;
