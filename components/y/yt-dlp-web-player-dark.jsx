import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acddq37ag.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acddq37ag"/>`,
		"fallback": "selfhst:yt-dlp-web-player-dark",
	});
}

export default Component;
