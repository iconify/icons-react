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
		"content": `<style>.xizkjhbcr {
  fill: currentColor;
  d: path("m16.304 11.962l-4.227-4.227l4.227-4.227l4.227 4.227zM4.615 10.616v-6h6v6zm8.77 8.769v-6h6v6zm-8.77 0v-6h6v6zm1-9.77h4v-4h-4zm10.714.97l2.825-2.826l-2.825-2.825l-2.825 2.826zm-1.945 7.8h4v-4h-4zm-8.769 0h4v-4h-4zm8.77-4");
}
</style><path class="xizkjhbcr"/>`,
		"fallback": "material-symbols-light:widgets-outline-sharp",
	});
}

export default Component;
