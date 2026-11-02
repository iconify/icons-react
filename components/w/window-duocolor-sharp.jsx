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
		"content": `<style>.adiypubxg {
  stroke-opacity: 0.4;
  d: path("M3 8h18");
}

.e9jl5nxyo {
  d: path("M3 8V4h18v16H3z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="adiypubxg"/><path class="e9jl5nxyo"/></g>`,
		"fallback": "coolicons:window-duocolor-sharp",
	});
}

export default Component;
