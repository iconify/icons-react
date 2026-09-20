import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gq88usbhz.css';
import '../../css/i/i48zahbzg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gq88usbhz"/><path class="i48zahbzg"/>`,
		"fallback": "selfhst:youtubarr",
	});
}

export default Component;
