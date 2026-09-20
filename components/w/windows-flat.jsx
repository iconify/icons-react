import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_37733vb.css';
import '../../css/z/zcl6jhbsn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c_37733vb"/><path clip-rule="evenodd" class="zcl6jhbsn"/></g>`,
		"fallback": "streamline-color:windows-flat",
	});
}

export default Component;
