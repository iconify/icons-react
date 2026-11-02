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
		"content": `<style>.bg2ejdbaq {
  d: path("M12 5v16");
}

.n52tb9b6r {
  stroke-opacity: 0.4;
  d: path("M12 5a5 5 0 1 0-4 8m4-8a5 5 0 1 1 4 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="n52tb9b6r"/><path class="bg2ejdbaq"/></g>`,
		"fallback": "coolicons:zodiac-aries-duocolor-sharp",
	});
}

export default Component;
