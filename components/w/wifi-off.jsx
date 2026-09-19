import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uarocz_at.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uarocz_at"/>`,
		"fallback": "guidance:wifi-off",
	});
}

export default Component;
