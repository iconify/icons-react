import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h8-h7-bhg.css';
import '../../css/h/h-_epdppu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h8-h7-bhg"/><path class="h-_epdppu"/>`,
		"fallback": "boxicons:yarn-ball-filled",
	});
}

export default Component;
