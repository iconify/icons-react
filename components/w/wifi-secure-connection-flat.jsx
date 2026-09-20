import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/p/p7gdws19p.css';
import '../../css/r/rya0u4ixx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="p7gdws19p"/><path class="rya0u4ixx"/></g>`,
		"fallback": "streamline-flex-color:wifi-secure-connection-flat",
	});
}

export default Component;
