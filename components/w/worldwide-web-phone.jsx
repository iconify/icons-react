import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xogaw08ty.css';
import '../../css/l/l1gxgjb8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xogaw08ty"/><path class="l1gxgjb8k"/></g>`,
		"fallback": "streamline-freehand-color:worldwide-web-phone",
	});
}

export default Component;
