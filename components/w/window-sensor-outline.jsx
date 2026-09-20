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
		"content": `<style>.cpokk8bda {
  fill: currentColor;
  d: path("M22 9q-.425 0-.712-.288T21 8V4q0-.425.288-.712T22 3t.713.288T23 4v4q0 .425-.288.713T22 9M3 21V3h16v18zm2-10h5v-1h2v1h5V5H5zm0 8h12v-6H5zm0 0h12z");
}
</style><path class="cpokk8bda"/>`,
		"fallback": "material-symbols:window-sensor-outline",
	});
}

export default Component;
