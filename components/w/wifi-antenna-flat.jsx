import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/y/ycwbc_bje.css';
import '../../css/j/jzs-99bst.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="ycwbc_bje"/><path class="jzs-99bst"/></g>`,
		"fallback": "streamline-flex-color:wifi-antenna-flat",
	});
}

export default Component;
