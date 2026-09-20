import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nmy8nnbjn.css';
import '../../css/s/scezf8a3n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="nmy8nnbjn"/><path class="scezf8a3n"/></g>`,
		"fallback": "streamline-flex-color:youtube-flat",
	});
}

export default Component;
