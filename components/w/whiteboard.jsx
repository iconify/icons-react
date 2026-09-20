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
		"content": `<style>.rhvrpqw8i {
  fill: currentColor;
  d: path("M5 18v-5l9.95-9.95Q16 2 17.45 2t2.5 1.05Q21 4.1 21 5.55t-1.05 2.5L10 18Zm2-2h2.175l9.375-9.375q.45-.45.45-1.088q0-.637-.45-1.087Q18.1 4 17.462 4q-.637 0-1.087.45L7 13.825Zm-4 6v-2h18v2Z");
}
</style><path class="rhvrpqw8i"/>`,
		"fallback": "material-symbols:whiteboard",
	});
}

export default Component;
