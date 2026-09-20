import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvm3lumsw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvm3lumsw"/>`,
		"fallback": "selfhst:xmpp-light",
	});
}

export default Component;
