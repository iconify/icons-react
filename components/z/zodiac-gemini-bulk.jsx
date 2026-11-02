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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.t97zy2bgd {
  d: path("M7.316 4.051a14.8 14.8 0 0 0 13.115-1.873a1 1 0 0 1 1.391.253a1 1 0 0 1-.253 1.391a16.7 16.7 0 0 1-4.253 2.127A16.8 16.8 0 0 1 2.431 3.822a.999.999 0 1 1 1.138-1.644c1.154.8 2.415 1.43 3.747 1.873m-.632 14A16.7 16.7 0 0 1 12 17.189a16.7 16.7 0 0 1 5.316.862a16.7 16.7 0 0 1 4.253 2.127a.999.999 0 1 1-1.138 1.644a14.81 14.81 0 0 0-16.862 0a.999.999 0 1 1-1.138-1.644a16.7 16.7 0 0 1 4.253-2.127");
}

.wq9ieqbgu {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M8 19a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Zm10 0a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Z");
}
</style><g class="cuyn6tgcc"><path class="wq9ieqbgu"/><path class="t97zy2bgd"/></g>`,
		"fallback": "coolicons:zodiac-gemini-bulk",
	});
}

export default Component;
