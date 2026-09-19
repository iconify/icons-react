import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cufh5c1yt.css';

const viewBox = {"width":2671,"height":800};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cufh5c1yt"/>`,
		"fallback": "ls:yapcasialogo",
	});
}

export default Component;
