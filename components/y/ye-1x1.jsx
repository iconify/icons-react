import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/e/erzf03bmv.css';
import '../../css/p/pjuj9ub2p.css';
import '../../css/z/zaosl5byf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="erzf03bmv"/><path class="pjuj9ub2p"/><path class="zaosl5byf"/></g>`,
		"fallback": "flag:ye-1x1",
	});
}

export default Component;
