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
		"content": `<style>.yji_nl90z {
  fill: currentColor;
  d: path("M11 19v-4.1q-2.15-.35-3.575-2T6 9V4q0-.425.288-.712T7 3h10q.425 0 .713.288T18 4v5q0 2.25-1.425 3.9T13 14.9V19h2q.425 0 .713.288T16 20t-.288.713T15 21H9q-.425 0-.712-.288T8 20t.288-.712T9 19zM8 8h8V5H8z");
}
</style><path class="yji_nl90z"/>`,
		"fallback": "material-symbols:wine-bar-rounded",
	});
}

export default Component;
