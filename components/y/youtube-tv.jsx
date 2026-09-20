import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl4nvpb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl4nvpb4x"/>`,
		"fallback": "mdi:youtube-tv",
	});
}

export default Component;
