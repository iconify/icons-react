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
		"content": `<style>.gnjs9vbqr {
  fill: currentColor;
  d: path("M17 20V4h2v16zM2 22V2h13v20zm19-4V6h1.5v12zM4 20h9V4H4zM4 4v16z");
}
</style><path class="gnjs9vbqr"/>`,
		"fallback": "material-symbols:web-stories-outline-sharp",
	});
}

export default Component;
