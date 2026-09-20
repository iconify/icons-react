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
		"content": `<style>.i3q-ivb6f {
  fill: var(--svg-color--2a00ff, #2a00ff);
  d: path("M9.097 3H5.613v13.355h3.484v-5.934l5.226 5.934h4.064l-5.806-6.678L17.806 3h-4.064L9.097 8.934zM7.355 21a1.742 1.742 0 1 0 0-3.483a1.742 1.742 0 0 0 0 3.483");
}
</style><path class="i3q-ivb6f"/>`,
		"fallback": "token-branded:xki",
	});
}

export default Component;
