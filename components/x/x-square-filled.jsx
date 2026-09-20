import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly1ve4w5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ly1ve4w5q"/>`,
		"fallback": "reicon:x-square-filled",
	});
}

export default Component;
