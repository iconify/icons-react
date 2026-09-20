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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.uvtcqub_o {
  d: path("M7 11a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.znakeibcb {
  d: path("m14 14 3 3");
}
</style><g class="nrj6p8qat"><path class="nzpsuduik"/><path class="uvtcqub_o"/><path class="znakeibcb"/></g>`,
		"fallback": "iconmind:zoom-fit-outline-regular",
	});
}

export default Component;
