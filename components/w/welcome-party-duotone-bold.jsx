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
		"content": `<style>.cjddu477a {
  d: path("m20 10 -2 2 2 2");
}

.e0fatccfd {
  d: path("M18 12h4");
}

.fxaerfbaz {
  d: path("M6 20V4h10v16");
}

.jtcv4c9tp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M18 12h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.naf5gjb6k {
  d: path("M12 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.njc0tpbau {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m20 10 -2 2 2 2");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ucn3qlbgp {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M6 20V4h10v16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y8h-esezl {
  fill: currentColor;
  d: path("M12 12a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="y8h-esezl"/><path class="ucn3qlbgp"/><path class="jtcv4c9tp"/><path class="njc0tpbau"/><path class="fxaerfbaz"/><path class="naf5gjb6k"/><path class="e0fatccfd"/><path class="cjddu477a"/></g>`,
		"fallback": "iconmind:welcome-party-duotone-bold",
	});
}

export default Component;
