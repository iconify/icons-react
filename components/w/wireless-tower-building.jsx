import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cos5mxb2j.css';
import '../../css/h/hgr3jjbai.css';
import '../../css/y/yy7j92b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cos5mxb2j"/><path class="hgr3jjbai"/><path class="yy7j92b2u"/></g>`,
		"fallback": "streamline-freehand:wireless-tower-building",
	});
}

export default Component;
