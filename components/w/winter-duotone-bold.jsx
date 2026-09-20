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
		"content": `<style>.i-83p_bua {
  d: path("M12 4v12m-6 0L18 4");
}

.rkhcgsbdl {
  d: path("M3 19h18");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vrymclvxs {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 4v12m-6 0L18 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.xaz90clio {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 19h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="vrymclvxs"/><path class="xaz90clio"/><path class="i-83p_bua"/><path class="rkhcgsbdl"/></g>`,
		"fallback": "iconmind:winter-duotone-bold",
	});
}

export default Component;
