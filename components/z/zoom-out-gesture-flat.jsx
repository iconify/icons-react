import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y53wbcbub.css';
import '../../css/q/qwhy3wpyj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y53wbcbub"/><path clip-rule="evenodd" class="qwhy3wpyj"/></g>`,
		"fallback": "streamline-flex-color:zoom-out-gesture-flat",
	});
}

export default Component;
