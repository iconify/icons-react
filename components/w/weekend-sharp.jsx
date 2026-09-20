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
		"content": `<style>.q1rfw60cx {
  fill: currentColor;
  d: path("M1 20V10h4v6h14v-6h4v10zm6-6V8H4V4h16v4h-3v6z");
}
</style><path class="q1rfw60cx"/>`,
		"fallback": "material-symbols:weekend-sharp",
	});
}

export default Component;
