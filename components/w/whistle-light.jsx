import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk239u8og.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk239u8og"/>`,
		"fallback": "pullo:whistle-light",
	});
}

export default Component;
