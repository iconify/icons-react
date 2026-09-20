import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9_bqtbvl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9_bqtbvl"/>`,
		"fallback": "selfhst:yt-zero-light",
	});
}

export default Component;
