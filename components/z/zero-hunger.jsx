import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/isbqey50u.css';
import '../../css/j/jo-xdpbzy.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="isbqey50u"/><path class="jo-xdpbzy"/></g>`,
		"fallback": "streamline-color:zero-hunger",
	});
}

export default Component;
