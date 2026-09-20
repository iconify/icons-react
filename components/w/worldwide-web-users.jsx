import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/y/yd4k43-kd.css';
import '../../css/j/j4x3mh5ui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="yd4k43-kd"/><path class="j4x3mh5ui"/></g>`,
		"fallback": "streamline-freehand:worldwide-web-users",
	});
}

export default Component;
