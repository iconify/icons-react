import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoa33-y8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoa33-y8y"/>`,
		"fallback": "cbi:wireguard",
	});
}

export default Component;
