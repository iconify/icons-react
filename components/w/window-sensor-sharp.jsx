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
		"content": `<style>.ic_dc2bpw {
  fill: currentColor;
  d: path("M21.288 8.713Q21 8.425 21 8V4q0-.425.288-.712T22 3t.713.288T23 4v4q0 .425-.288.713T22 9t-.712-.288M3 21V3h16v18zm3-10h4v-1h2v1h4V6H6zm0 7h10v-5H6zm-1 1h12V5H5z");
}
</style><path class="ic_dc2bpw"/>`,
		"fallback": "material-symbols:window-sensor-sharp",
	});
}

export default Component;
