import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t2b0vdbet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t2b0vdbet"/>`,
		"fallback": "coolicons:window-sidebar-right-round",
	});
}

export default Component;
