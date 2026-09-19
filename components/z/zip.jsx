import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/z/zxioyss3z.css';
import '../../css/j/jgkcneb9x.css';
import '../../css/p/pd8e-bc_k.css';
import '../../css/k/krp3398zx.css';
import '../../css/j/jtnjq2ijf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="zxioyss3z"/><path class="jgkcneb9x"/><path clip-rule="evenodd" class="pd8e-bc_k"/><path class="krp3398zx"/><path class="jtnjq2ijf"/></g>`,
		"fallback": "icon-park-outline:zip",
	});
}

export default Component;
