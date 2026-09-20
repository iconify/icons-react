import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qfglyaczc.css';
import '../../css/q/q689l0bih.css';
import '../../css/c/cyrpj6b8t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qfglyaczc"/><path class="q689l0bih"/><path class="cyrpj6b8t"/></g>`,
		"fallback": "streamline-freehand:worldwide-web-browser",
	});
}

export default Component;
