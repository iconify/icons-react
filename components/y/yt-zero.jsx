import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yh1f6ibkg.css';
import '../../css/h/ht1gobb_e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yh1f6ibkg"/><path class="ht1gobb_e"/>`,
		"fallback": "selfhst:yt-zero",
	});
}

export default Component;
