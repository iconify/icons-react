import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iokgu7y9p.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iokgu7y9p"/>`,
		"fallback": "pullo:whistle",
	});
}

export default Component;
