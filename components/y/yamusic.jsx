import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e8i2-h4lm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.91 4.5v17.85a7.57 7.57 0 1 0 2.24 5.38V13.61l11 3.4V9ZM23 12h-.07a15.77 15.77 0 1 0 15.44 15.72");
}
</style><path class="e8i2-h4lm"/>`,
		"fallback": "arcticons:yamusic",
	});
}

export default Component;
