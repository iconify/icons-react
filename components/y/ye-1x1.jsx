import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9qcacyl.css';
import '../../css/y/y6ty87ont.css';
import '../../css/j/jfnvkb-8m.css';
import '../../css/j/jknsvfhjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nv9qcacyl"><path class="y6ty87ont"/><path class="jfnvkb-8m"/><path class="jknsvfhjj"/></g>`,
		"fallback": "flag:ye-1x1",
	});
}

export default Component;
