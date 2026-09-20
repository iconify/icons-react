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
		"content": `<style>.gg9bohboc {
  fill: var(--svg-color--28dbd1, #28dbd1);
  d: path("M7.765 13.059L15.722 3l-3.198 7.941h3.711L8.352 21l3.171-7.941z");
}
</style><path class="gg9bohboc"/>`,
		"fallback": "token-branded:xrune",
	});
}

export default Component;
