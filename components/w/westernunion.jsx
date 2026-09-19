import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8iwk6bgu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8iwk6bgu"/>`,
		"fallback": "whh:westernunion",
	});
}

export default Component;
