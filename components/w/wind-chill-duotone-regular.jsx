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
		"content": `<style>.f-4cwjbyj {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 16h11a3 3 0 1 1 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.filuri95n {
  d: path("M8 4v8m-4 0 8 -8");
}

.g7rxpleju {
  d: path("M4 20h14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p9fnnqwai {
  d: path("M4 16h11a3 3 0 1 1 -3 3");
}

.sboezp07x {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 20h14");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yd020bcph {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 4v8m-4 0 8 -8");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="yd020bcph"/><path class="f-4cwjbyj"/><path class="sboezp07x"/><path class="filuri95n"/><path class="p9fnnqwai"/><path class="g7rxpleju"/></g>`,
		"fallback": "iconmind:wind-chill-duotone-regular",
	});
}

export default Component;
