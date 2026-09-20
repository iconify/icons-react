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
		"content": `<style>.afxv9_b8a {
  d: path("M3 7h12a3 3 0 1 0 -3 -3");
}

.hhymh7b6a {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 7h12a3 3 0 1 0 -3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.i990agefc {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 17h11a3 3 0 1 1 -3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oq5d88tuy {
  d: path("M3 12h15");
}

.oyg7a3-vt {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 12h15");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.x199_yb0z {
  d: path("M3 17h11a3 3 0 1 1 -3 3");
}
</style><g class="nrj6p8qat"><path class="hhymh7b6a"/><path class="oyg7a3-vt"/><path class="i990agefc"/><path class="afxv9_b8a"/><path class="oq5d88tuy"/><path class="x199_yb0z"/></g>`,
		"fallback": "iconmind:wind-duotone-regular",
	});
}

export default Component;
