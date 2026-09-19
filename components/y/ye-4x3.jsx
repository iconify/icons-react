import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/q/q_db8_jqy.css';
import '../../css/t/t2gnh4b_r.css';
import '../../css/y/yeak49cce.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="q_db8_jqy"/><path class="t2gnh4b_r"/><path class="yeak49cce"/></g>`,
		"fallback": "flag:ye-4x3",
	});
}

export default Component;
