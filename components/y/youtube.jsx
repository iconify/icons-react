import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/ooy41dbxp.css';
import '../../css/z/z0g9z0bil.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ooy41dbxp"/><path class="z0g9z0bil"/></g>`,
		"fallback": "ix:youtube",
	});
}

export default Component;
