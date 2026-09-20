import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yeug8pb_s.css';
import '../../css/k/kifmwrb0s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yeug8pb_s"/><path class="kifmwrb0s"/>`,
		"fallback": "selfhst:youtube-shorts",
	});
}

export default Component;
