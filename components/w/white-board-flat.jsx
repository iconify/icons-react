import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g_mc4skjc.css';
import '../../css/b/b3bqa4bnf.css';
import '../../css/e/erxplv5qz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="g_mc4skjc"/><path class="b3bqa4bnf"/><path class="erxplv5qz"/></g>`,
		"fallback": "streamline-flex-color:white-board-flat",
	});
}

export default Component;
