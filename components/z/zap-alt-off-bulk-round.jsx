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

.scc1kvjkf {
  d: path("m2.707 4.293l17 17a.999.999 0 1 1-1.414 1.414l-17-17a.999.999 0 1 1 1.414-1.414");
}

.y0-n9ejxv {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M15.328 14.086L7.471 6.228l1.087-2.446A3 3 0 0 1 11.3 2H15a2.162 2.162 0 0 1 1.876 3.233L14.861 8.76A.16.16 0 0 0 15 9h1a1.827 1.827 0 0 1 1.293 3.121Zm-2.121 2.121l-4.086 4.086a1.582 1.582 0 0 1-2.663-1.462l1.24-5.584A.202.202 0 0 0 7.5 13a1.974 1.974 0 0 1-1.805-2.777l.47-1.058Z");
}
</style><g class="cuyn6tgcc"><path class="y0-n9ejxv"/><path class="scc1kvjkf"/></g>`,
		"fallback": "coolicons:zap-alt-off-bulk-round",
	});
}

export default Component;
