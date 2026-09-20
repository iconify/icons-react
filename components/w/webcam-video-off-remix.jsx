import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iin6sj8pc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iin6sj8pc"/>`,
		"fallback": "streamline-flex:webcam-video-off-remix",
	});
}

export default Component;
