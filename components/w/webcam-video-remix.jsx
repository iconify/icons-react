import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwd0vej1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pwd0vej1w"/>`,
		"fallback": "streamline-sharp:webcam-video-remix",
	});
}

export default Component;
