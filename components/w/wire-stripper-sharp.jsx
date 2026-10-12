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
		"content": `<style>.m4fa-_bhd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 4.75v-2h2.75v4.5h4.5v-4.5H17v6a5 5 0 0 1-10 0Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vcm_t_brk {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10 13.3l5.5 7.95M14 13.3l-5.5 7.95");
}

.zrnuaslnh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 10.5h.01");
}
</style><g class="ux2u0rbkq"><path class="m4fa-_bhd"/><path class="zrnuaslnh"/><path class="vcm_t_brk"/></g>`,
		"fallback": "iconoven:wire-stripper-sharp",
	});
}

export default Component;
