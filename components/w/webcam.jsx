import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxkre9b1z.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxkre9b1z"/>`,
		"fallback": "whh:webcam",
	});
}

export default Component;
