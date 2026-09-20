import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnaz4ljev.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnaz4ljev"/>`,
		"fallback": "selfhst:yt-dlp-web-player-light",
	});
}

export default Component;
