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
		"content": `<style>.a1mbuxbpb {
  stroke-opacity: 0.4;
  d: path("M17 21c-1.5-1-3-3-3-5a3 3 0 0 1 6 0c0 2-1.5 4-3 5m0-5h.01");
}

.j20rde88o {
  d: path("M13.394 10H10l4-7H7l-4 9h3l-2 9l6.085-6.085");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="a1mbuxbpb"/><path class="j20rde88o"/></g>`,
		"fallback": "coolicons:zap-alt-map-pin-corner-duocolor-sharp",
	});
}

export default Component;
