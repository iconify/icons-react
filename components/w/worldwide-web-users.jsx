import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/cnydaccbe.css';
import '../../css/a/ai3u1bbps.css';
import '../../css/i/imx1lsbhj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="cnydaccbe"/><path class="ai3u1bbps"/><path class="imx1lsbhj"/></g>`,
		"fallback": "streamline-freehand-color:worldwide-web-users",
	});
}

export default Component;
