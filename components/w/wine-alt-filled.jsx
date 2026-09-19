import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv_l3nbzk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv_l3nbzk"/>`,
		"fallback": "boxicons:wine-alt-filled",
	});
}

export default Component;
