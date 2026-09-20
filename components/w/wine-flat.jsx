import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9kdpcb3n.css';
import '../../css/q/qv9ldpb6n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l9kdpcb3n"/><path class="qv9ldpb6n"/></g>`,
		"fallback": "streamline-color:wine-flat",
	});
}

export default Component;
