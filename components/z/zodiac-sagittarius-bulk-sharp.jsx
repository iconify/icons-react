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

.cz_iyzbnm {
  d: path("m7.586 15l-2.293-2.293a.999.999 0 1 1 1.414-1.414L9 13.586L20.293 2.293a.999.999 0 1 1 1.414 1.414L10.414 15l2.293 2.293a.999.999 0 1 1-1.414 1.414L9 16.414l-5.293 5.293a.999.999 0 1 1-1.414-1.414Z");
}

.sefmfp0ls {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M21 2a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V4h-6a1 1 0 0 1 0-2Z");
}
</style><g class="cuyn6tgcc"><path class="sefmfp0ls"/><path class="cz_iyzbnm"/></g>`,
		"fallback": "coolicons:zodiac-sagittarius-bulk-sharp",
	});
}

export default Component;
