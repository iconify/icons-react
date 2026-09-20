import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/ua5jal-6v.css';
import '../../css/y/ynpcb1bzj.css';
import '../../css/n/nsvyxtbqj.css';
import '../../css/t/ti4702bcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ua5jal-6v"/><path class="ynpcb1bzj"/><path class="nsvyxtbqj"/><path class="ti4702bcp"/></g>`,
		"fallback": "streamline-freehand-color:website-development-browser-hand",
	});
}

export default Component;
