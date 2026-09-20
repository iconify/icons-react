import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywxc_u7nk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ywxc_u7nk"/>`,
		"fallback": "streamline:xrp-circle-remix",
	});
}

export default Component;
