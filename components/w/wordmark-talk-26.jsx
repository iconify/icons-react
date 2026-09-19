import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7b39ibpd.css';

const viewBox = {"width":39,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7b39ibpd"/>`,
		"fallback": "garden:wordmark-talk-26",
	});
}

export default Component;
