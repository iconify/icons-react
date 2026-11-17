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
		"content": `<style>.cuyn6tgcc {
  fill: currentColor;
}

.gwlk53nzq {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M15.328 14.086L7.471 6.228l1.615-3.634C9.247 2.233 9.605 2 10 2h7a1 1 0 0 1 .868 1.496L14.723 9H18a1.002 1.002 0 0 1 .707 1.707Zm-3.535.707l1.414 1.414l-5.5 5.5a1 1 0 0 1-1.683-.924L7.753 13H6a1 1 0 0 1-.914-1.406l1.079-2.429Z");
}

.scc1kvjkf {
  d: path("m2.707 4.293l17 17a.999.999 0 1 1-1.414 1.414l-17-17a.999.999 0 1 1 1.414-1.414");
}
</style><g class="cuyn6tgcc"><path class="gwlk53nzq"/><path class="scc1kvjkf"/></g>`,
		"fallback": "coolicons:zap-alt-off-bulk-sharp",
	});
}

export default Component;
