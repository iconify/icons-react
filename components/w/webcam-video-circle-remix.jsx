import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2t1a2bpu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h2t1a2bpu"/>`,
		"fallback": "streamline:webcam-video-circle-remix",
	});
}

export default Component;
