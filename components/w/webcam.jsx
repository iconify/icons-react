import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/rtin43b5w.css';
import '../../css/y/ywyzcbcrm.css';
import '../../css/r/ry84oklno.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="rtin43b5w"/><path class="ywyzcbcrm"/><path class="ry84oklno"/></g>`,
		"fallback": "streamline-freehand:webcam",
	});
}

export default Component;
