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

.ks8suqbtn {
  d: path("M7.16 16a7.71 7.71 0 1 1 9.68 0H20a1 1 0 0 1 0 2h-5a1 1 0 0 1-1-1v-1c0-.379.214-.725.553-.894a5.7 5.7 0 0 0 1.483-1.07a5.708 5.708 0 1 0-6.589 1.07A1 1 0 0 1 10 16v1a1 1 0 0 1-1 1H4a1 1 0 0 1 0-2Z");
}

.x7zdd9sig {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M4 20h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="x7zdd9sig"/><path class="ks8suqbtn"/></g>`,
		"fallback": "coolicons:zodiac-libra-bulk",
	});
}

export default Component;
