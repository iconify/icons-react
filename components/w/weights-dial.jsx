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
		"content": `<style>.g1cmp1uny {
  cx: 12px;
  cy: 13.25px;
  r: 6.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lz8j_nb_a {
  d: path("m4.64 9l-1.08-.62m4.19-2.49l-.62-1.08M12 4.75V3.5m4.25 2.39l.63-1.08M19.36 9l1.08-.62M12 13.25l2.13-3.68");
}
</style><g class="hntgybcog"><circle class="g1cmp1uny"/><path class="lz8j_nb_a"/></g>`,
		"fallback": "iconoven:weights-dial",
	});
}

export default Component;
