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
		"content": `<style>.bso0bbbqi {
  d: path("M21 8A9 9 0 0 1 3 8");
}

.hiqcqfbaf {
  d: path("M12 8v10");
}

.lm0rdp4mt {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M21 8A9 9 0 0 1 3 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mrtipt_up {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 18a2 2 0 0 1 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nu0ti3ggl {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M3 8h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.vhnbtvbtn {
  d: path("M3 8h18");
}

.wdfpsmk4k {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M12 8v10");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.yb0sj-xar {
  d: path("M12 18a2 2 0 0 1 -4 0");
}
</style><g class="s0phu2bbs"><path class="lm0rdp4mt"/><path class="nu0ti3ggl"/><path class="wdfpsmk4k"/><path class="mrtipt_up"/><path class="bso0bbbqi"/><path class="vhnbtvbtn"/><path class="hiqcqfbaf"/><path class="yb0sj-xar"/></g>`,
		"fallback": "iconmind:wind-umbrella-duotone-bold",
	});
}

export default Component;
