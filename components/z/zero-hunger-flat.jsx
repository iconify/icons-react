import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/b/bnd7ohb5x.css';
import '../../css/q/qwoqt-bux.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="bnd7ohb5x"/><path class="qwoqt-bux"/></g>`,
		"fallback": "streamline-color:zero-hunger-flat",
	});
}

export default Component;
