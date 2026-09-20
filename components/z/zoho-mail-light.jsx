import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2p5fcbdz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2p5fcbdz"/>`,
		"fallback": "selfhst:zoho-mail-light",
	});
}

export default Component;
