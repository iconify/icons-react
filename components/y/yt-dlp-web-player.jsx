import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/knpoae5ge.css';
import '../../css/i/ipyektf-k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="knpoae5ge"/><path class="ipyektf-k"/>`,
		"fallback": "selfhst:yt-dlp-web-player",
	});
}

export default Component;
