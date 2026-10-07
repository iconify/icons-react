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
		"content": `<style>.v-bne6cqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 7C4 4.2386 6.2386 2 9 2L15 2C17.7614 2 20 4.2386 20 7L20 13C20 15.7614 17.7614 18 15 18L9 18C6.2386 18 4 15.7614 4 13L4 7ZM15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.3431 10.3431 7 12 7C13.6569 7 15 8.3431 15 10ZM12 18L12 22M6 22L18 22");
}
</style><path class="v-bne6cqy"/>`,
		"fallback": "keyline-icons:webcam",
	});
}

export default Component;
