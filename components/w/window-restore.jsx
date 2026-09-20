import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhau1xb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhau1xb8w"/>`,
		"fallback": "mdi:window-restore",
	});
}

export default Component;
