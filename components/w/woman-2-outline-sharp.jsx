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
		"content": `<style>.la6npqo_s {
  fill: currentColor;
  d: path("M10.673 21.5v-6.115H7.385l3.297-8.308h2.627l3.307 8.308h-3.289V21.5zM12 5.808q-.698 0-1.195-.497t-.497-1.195t.497-1.196T12 2.423t1.195.497t.497 1.196q0 .698-.497 1.195T12 5.808");
}
</style><path class="la6npqo_s"/>`,
		"fallback": "material-symbols-light:woman-2-outline-sharp",
	});
}

export default Component;
