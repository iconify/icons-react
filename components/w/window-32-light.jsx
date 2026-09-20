import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zx0di6b_n {
  fill: currentColor;
  d: path("M29 24.5v-17A4.5 4.5 0 0 0 24.5 3h-17A4.5 4.5 0 0 0 3 7.5v17A4.5 4.5 0 0 0 7.5 29h17a4.5 4.5 0 0 0 4.5-4.5m-25 0V11h24v13.5a3.5 3.5 0 0 1-3.5 3.5h-17A3.5 3.5 0 0 1 4 24.5");
}
</style><path class="zx0di6b_n"/>`,
		"fallback": "fluent:window-32-light",
	});
}

export default Component;
