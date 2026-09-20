import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g77aunb1c.css';
import '../../css/p/pjb13lo3b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="g77aunb1c"/><path clip-rule="evenodd" class="pjb13lo3b"/></g>`,
		"fallback": "streamline-color:windmill-flat",
	});
}

export default Component;
