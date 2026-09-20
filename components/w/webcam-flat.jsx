import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nu5k1io1b.css';
import '../../css/n/nug3g2bvh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="nu5k1io1b"/><path class="nug3g2bvh"/></g>`,
		"fallback": "streamline-flex-color:webcam-flat",
	});
}

export default Component;
