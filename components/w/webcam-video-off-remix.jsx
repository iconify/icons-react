import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsf4d8bxm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rsf4d8bxm"/>`,
		"fallback": "streamline:webcam-video-off-remix",
	});
}

export default Component;
