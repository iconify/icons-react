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
		"content": `<style>.aceudhn5f {
  d: path("M13 18h3");
}

.d9hh7n2bj {
  d: path("M6 10v8h4");
}

.f21or-k3k {
  d: path("M2 4a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.pdkc8dtfu {
  d: path("M19 18h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="f21or-k3k"/><path class="d9hh7n2bj"/><path class="aceudhn5f"/><path class="pdkc8dtfu"/></g>`,
		"fallback": "iconmind:workflow-template-outline-bold",
	});
}

export default Component;
