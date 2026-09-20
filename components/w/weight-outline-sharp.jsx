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
		"content": `<style>.qbeoiac1o {
  fill: currentColor;
  d: path("M6 19h12L16.575 9h-9.15zm6-11q.425 0 .713-.288T13 7t-.288-.712T12 6t-.712.288T11 7t.288.713T12 8M4.835 20L6.546 8h3.745q-.133-.212-.212-.468Q10 7.275 10 7q0-.846.577-1.423T12 5t1.423.577T14 7q0 .275-.079.532q-.079.256-.211.468h3.744l1.711 12zM6 19h12z");
}
</style><path class="qbeoiac1o"/>`,
		"fallback": "material-symbols-light:weight-outline-sharp",
	});
}

export default Component;
