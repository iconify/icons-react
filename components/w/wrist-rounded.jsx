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
		"content": `<style>.xr56blbct {
  fill: currentColor;
  d: path("M6.1 17H2q-.425 0-.712-.288T1 16V8q0-.425.288-.712T2 7h3.6l1.1-1.125q.425-.425.975-.65T8.825 5H19q.425 0 .713.288T20 6t-.288.713T19 7h-5v1.5h7q.425 0 .713.288T22 9.5t-.288.713T21 10.5h-7V12h8q.425 0 .713.288T23 13t-.288.713T22 14h-8v1.5h6q.425 0 .713.288T21 16.5t-.288.713T20 17.5h-7.875l.15.3q.425.875.263 1.813t-.838 1.612q-.3.275-.7.275t-.675-.275z");
}
</style><path class="xr56blbct"/>`,
		"fallback": "material-symbols:wrist-rounded",
	});
}

export default Component;
