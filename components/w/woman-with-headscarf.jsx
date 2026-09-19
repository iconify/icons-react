import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l88mxnbpi.css';
import '../../css/d/dq1ooxw0n.css';
import '../../css/z/ztwkx2hlv.css';
import '../../css/t/t4yxw7jvs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l88mxnbpi"/><path class="dq1ooxw0n"/><path class="ztwkx2hlv"/><path class="t4yxw7jvs"/></g>`,
		"fallback": "fluent-emoji-high-contrast:woman-with-headscarf",
	});
}

export default Component;
