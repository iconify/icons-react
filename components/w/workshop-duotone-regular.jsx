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
		"content": `<style>.a3lt-0bpy {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M19 13v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.bmhu8wbog {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 13V6h9v7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.egmswwblb {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10 6a2.5 2.5 0 0 1 5 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f5ieidcch {
  d: path("M5 13v8");
}

.gr2yy8pwl {
  d: path("M8 13V6h9v7");
}

.i82e_rwjf {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 13v8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pkf-n2b8h {
  d: path("M10 6a2.5 2.5 0 0 1 5 0");
}

.q40roytdv {
  d: path("M19 13v8");
}

.w5o7xublt {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 13h20");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zugrvnb7t {
  d: path("M2 13h20");
}
</style><g class="nrj6p8qat"><path class="w5o7xublt"/><path class="i82e_rwjf"/><path class="a3lt-0bpy"/><path class="bmhu8wbog"/><path class="egmswwblb"/><path class="zugrvnb7t"/><path class="f5ieidcch"/><path class="q40roytdv"/><path class="gr2yy8pwl"/><path class="pkf-n2b8h"/></g>`,
		"fallback": "iconmind:workshop-duotone-regular",
	});
}

export default Component;
