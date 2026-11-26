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
		"content": `<style>.kpe638bcl {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15 5L15 7L15 8M9 9.5C10.3807 9.5 11.5 10.6193 11.5 12C11.5 13.3807 10.3807 14.5 9 14.5C7.6193 14.5 6.5 13.3807 6.5 12C6.5 10.6193 7.6193 9.5 9 9.5ZM15 5L22 5L22 9L15.9826 11.5072C15.9942 11.6712 16 11.8356 16 12C16 15.866 12.866 19 9 19C5.134 19 2 15.866 2 12C2 8.134 5.134 5 9 5Z");
}
</style><path class="kpe638bcl"/>`,
		"fallback": "keyline-icons:whistle-sharp",
	});
}

export default Component;
