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
		"content": `<style>.o743r2b5i {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V7H5zm2-7.5v-1h10v1zm0 4v-1h6v1z");
}
</style><path class="o743r2b5i"/>`,
		"fallback": "material-symbols-light:wysiwyg-outline-sharp",
	});
}

export default Component;
