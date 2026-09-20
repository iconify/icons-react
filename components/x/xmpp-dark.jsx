import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7iq_fa2b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7iq_fa2b"/>`,
		"fallback": "selfhst:xmpp-dark",
	});
}

export default Component;
