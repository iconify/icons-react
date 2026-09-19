import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y2swcvilm.css';

const viewBox = {"width":464,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y2swcvilm"/>`,
		"fallback": "ps:wikipedia",
	});
}

export default Component;
