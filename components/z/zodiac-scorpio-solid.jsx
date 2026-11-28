import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co73e0f2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co73e0f2q"/>`,
		"fallback": "iconaut:zodiac-scorpio-solid",
	});
}

export default Component;
