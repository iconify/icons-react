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
		"content": `<style>.n9c2qhycp {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zm0 16.5a1.75 1.75 0 0 1-1.75-1.75V8.5h15v9.25a1.75 1.75 0 0 1-1.75 1.75zm.5-9a.75.75 0 0 0 0 1.5h10.5a.75.75 0 0 0 0-1.5zm0 2.75a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5zm9 0a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm-9 2.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5zm4.5 0a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5z");
}
</style><path class="n9c2qhycp"/>`,
		"fallback": "fluent:window-text-24-filled",
	});
}

export default Component;
