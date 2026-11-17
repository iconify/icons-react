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

.ldypje23u {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16.275 15.032L8.826 7.584l4.141-5.207A1.002 1.002 0 0 1 14.75 3v6H19a1 1 0 0 1 .783 1.623Zm-3.303.94l1.423 1.423l-3.362 4.228A1.002 1.002 0 0 1 9.25 21v-6H5a1 1 0 0 1-.783-1.623l2.73-3.43Z");
}

.scc1kvjkf {
  d: path("m2.707 4.293l17 17a.999.999 0 1 1-1.414 1.414l-17-17a.999.999 0 1 1 1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="ldypje23u"/><path class="scc1kvjkf"/></g>`,
		"fallback": "coolicons:zap-off-bulk-sharp",
	});
}

export default Component;
