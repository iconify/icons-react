import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tx_27wbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tx_27wbsf"/>`,
		"fallback": "thesvg-color:xmpp",
	});
}

export default Component;
