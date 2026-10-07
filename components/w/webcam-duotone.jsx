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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v99v8jbll {
  d: path("M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.3431 10.3431 7 12 7C13.6569 7 15 8.3431 15 10ZM12 18L12 22M6 22L18 22");
}

.wepejg6gb {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 7C3 3.6863 5.6863 1 9 1L15 1C18.3137 1 21 3.6863 21 7L21 13C21 16.3137 18.3137 19 15 19L9 19C5.6863 19 3 16.3137 3 13L3 7Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="wepejg6gb"/><path class="v99v8jbll"/></g>`,
		"fallback": "keyline-icons:webcam-duotone",
	});
}

export default Component;
