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
		"content": `<style>.h514dgbdz {
  stroke-opacity: 0.4;
  d: path("m3 7l18-2v14L3 17Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vap96bb9k {
  d: path("M12 6v12m-9-6h18");
}
</style><g class="nrj6p8qat"><path class="h514dgbdz"/><path class="vap96bb9k"/></g>`,
		"fallback": "coolicons:windows-logo-duocolor",
	});
}

export default Component;
