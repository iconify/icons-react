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
		"content": `<style>.z4zgtib2m {
  fill: currentColor;
  d: path("M10.5 21v-5H8.475q-.525 0-.825-.437t-.1-.938l2.5-6.325q.25-.6.775-.95T12 7t1.175.35t.775.95l2.5 6.325q.2.5-.1.938t-.825.437H13.5v5q0 .425-.288.713T12.5 22h-1q-.425 0-.712-.288T10.5 21M12 6q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6");
}
</style><path class="z4zgtib2m"/>`,
		"fallback": "material-symbols:woman-2-outline-rounded",
	});
}

export default Component;
