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
		"content": `<style>.algumwb1d {
  d: path("M9 6.019V6a3.004 3.004 0 0 1 3-3h.001c1.657.001 3 1.343 2.999 3v.001A3 3 0 0 1 12 9h-.001A3 3 0 0 1 9 6.019M11.999 5a1 1 0 0 0-.711.297a.96.96 0 0 0-.288.697v.011A1 1 0 1 0 12 5Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.p_0v3bbwc {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M17 7a1 1 0 0 1 .97.757l3 12A.998.998 0 0 1 20 21H4a.998.998 0 0 1-.97-1.243l3-12A1 1 0 0 1 7 7Z");
}
</style><g class="cuyn6tgcc"><path class="p_0v3bbwc"/><path class="algumwb1d"/></g>`,
		"fallback": "coolicons:weight-bulk-sharp",
	});
}

export default Component;
