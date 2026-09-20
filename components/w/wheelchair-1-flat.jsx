import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vubq6rbfk.css';
import '../../css/v/vkf8jkb0b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="vubq6rbfk"/><path class="vkf8jkb0b"/></g>`,
		"fallback": "streamline-flex-color:wheelchair-1-flat",
	});
}

export default Component;
