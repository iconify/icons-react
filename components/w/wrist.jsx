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
		"content": `<style>.ppmjuvcit {
  fill: currentColor;
  d: path("M11 21.9L6.1 17H1V7h4.6l1.1-1.125q.425-.425.975-.65T8.825 5H19q.425 0 .713.288T20 6t-.288.713T19 7h-5v1.5h7q.425 0 .713.288T22 9.5t-.288.713T21 10.5h-7V12h8q.425 0 .713.288T23 13t-.288.713T22 14h-8v1.5h6q.425 0 .713.288T21 16.5t-.288.713T20 17.5h-7.875l.15.3q.425.875.263 1.813t-.838 1.612z");
}
</style><path class="ppmjuvcit"/>`,
		"fallback": "material-symbols:wrist",
	});
}

export default Component;
