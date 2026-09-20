import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ek40-u_-n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ek40-u_-n"/>`,
		"fallback": "streamline:workspace-desk-remix",
	});
}

export default Component;
