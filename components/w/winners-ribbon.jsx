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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wk-zfobws {
  d: path("M8.5 14.5v7L12 19l3.5 2.5v-7M8.5 9a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Z");
}

.zwz9jvx6z {
  d: path("M5.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Z");
}
</style><g class="ulnmmdpxh"><path class="zwz9jvx6z"/><path class="wk-zfobws"/></g>`,
		"fallback": "uix-sharp:winners-ribbon",
	});
}

export default Component;
