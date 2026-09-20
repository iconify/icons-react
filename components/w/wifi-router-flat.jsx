import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/w/wl0x9u5jz.css';
import '../../css/o/oud6qo14q.css';
import '../../css/d/disikgarl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="wl0x9u5jz"/><path class="oud6qo14q"/><path class="disikgarl"/></g>`,
		"fallback": "streamline-color:wifi-router-flat",
	});
}

export default Component;
