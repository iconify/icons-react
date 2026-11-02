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

.fqs10vm1u {
  d: path("M11 6a1 1 0 0 0 .922-1.387A.99.99 0 0 0 11 4a1 1 0 0 1 0-2a3 3 0 1 1 0 6H3a1 1 0 0 1 0-2Zm3 10a3 3 0 1 1 0 6a1 1 0 0 1 0-2a1.001 1.001 0 0 0 0-2H3a1 1 0 0 1 0-2Z");
}

.s0kf7kbuh {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18 11a2 2 0 0 0 0-4a1 1 0 0 1 0-2a4 4 0 0 1 0 8H3a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="s0kf7kbuh"/><path class="fqs10vm1u"/></g>`,
		"fallback": "coolicons:wind-bulk-sharp",
	});
}

export default Component;
