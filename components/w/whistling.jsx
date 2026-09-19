import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tr36qhbyi.css';
import '../../css/a/aoyh7r6mc.css';
import '../../css/l/lrwk-pf-f.css';
import '../../css/p/px128ob5z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tr36qhbyi"><path class="aoyh7r6mc"/><path class="lrwk-pf-f"/><path class="px128ob5z"/></g>`,
		"fallback": "icon-park:whistling",
	});
}

export default Component;
