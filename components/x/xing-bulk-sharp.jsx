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

.v7_53ttto {
  d: path("M9.894 9.553a1 1 0 0 1 0 .894l-3 6a1 1 0 1 1-1.788-.894L7.882 10L6.106 6.447a1 1 0 1 1 1.788-.894Z");
}

.x6n1l4bre {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("m13.145 13.989l3.723 6.515a1 1 0 1 1-1.736.992l-4-7a1 1 0 0 1-.01-.975l6-11a1 1 0 0 1 1.756.958Z");
}
</style><g class="cuyn6tgcc"><path class="x6n1l4bre"/><path class="v7_53ttto"/></g>`,
		"fallback": "coolicons:xing-bulk-sharp",
	});
}

export default Component;
