import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0ns1jc5x.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w0ns1jc5x"/>`,
		"fallback": "streamline-flex:webcam-video-off-solid",
	});
}

export default Component;
