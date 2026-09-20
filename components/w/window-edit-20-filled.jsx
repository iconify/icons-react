import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d7xymccpc {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.003c-.341.016-.68.092-1 .229V7H4v7a2 2 0 0 0 2 2h3.475a3 3 0 0 0-.043.155L9.22 17H6a3 3 0 0 1-3-3zm7.98 9.377l4.83-4.83a1.87 1.87 0 1 1 2.644 2.646l-4.83 4.829a2.2 2.2 0 0 1-1.02.578l-1.498.374a.89.89 0 0 1-1.079-1.078l.375-1.498a2.2 2.2 0 0 1 .578-1.02");
}
</style><path class="d7xymccpc"/>`,
		"fallback": "fluent:window-edit-20-filled",
	});
}

export default Component;
