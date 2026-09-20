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
		"content": `<style>.vvk0zlbuc {
  fill: currentColor;
  d: path("M2 22V8.5L12 2l10 6.5V22l-10-7Zm10-9.4l6.325-4.1L12 4.4L5.675 8.5Zm-8 5.55l6.2-4.325L4 9.8Zm16 0V9.8l-6.2 4.025Zm-9.8-4.325Zm3.6 0Z");
}
</style><path class="vvk0zlbuc"/>`,
		"fallback": "material-symbols:workbench-outline",
	});
}

export default Component;
