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
		"content": `<style>.j8ri2qizx {
  d: path("M8 21V6h8v15Z");
}

.o243xubfu {
  d: path("M2 21V11h6");
}

.qqp18hbup {
  d: path("M22 21v-7h-6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x-mi7nbzz {
  fill: currentColor;
  d: path("M8 21V6h8v15Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="x-mi7nbzz"/><path class="j8ri2qizx"/><path class="o243xubfu"/><path class="qqp18hbup"/></g>`,
		"fallback": "iconmind:winners-podium-duotone-bold",
	});
}

export default Component;
