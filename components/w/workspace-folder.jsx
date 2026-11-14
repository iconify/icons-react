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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ih1lrlw7a {
  d: path("M3 11a2 2 0 0 1 2-2h3.5l2 2H19a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.ll7bebbps {
  d: path("m6 9l-.75-4.5l5-.75L11 11m3 0l.75-8l5 .75L19 11");
}
</style><g class="hntgybcog"><path class="ih1lrlw7a"/><path class="ll7bebbps"/></g>`,
		"fallback": "uix:workspace-folder",
	});
}

export default Component;
