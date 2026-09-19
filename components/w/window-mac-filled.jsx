import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4v73cbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4v73cbww"/>`,
		"fallback": "boxicons:window-mac-filled",
	});
}

export default Component;
