import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s10i8bb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s10i8bb6q"/>`,
		"fallback": "qlementine-icons:youtube-fill-24",
	});
}

export default Component;
