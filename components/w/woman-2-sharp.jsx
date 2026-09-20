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
		"content": `<style>.y302akbqx {
  fill: currentColor;
  d: path("M10.5 22v-6H7l3.575-9h2.85L17 16h-3.5v6zM12 6q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6");
}
</style><path class="y302akbqx"/>`,
		"fallback": "material-symbols:woman-2-sharp",
	});
}

export default Component;
