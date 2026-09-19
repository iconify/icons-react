import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oh95zyn8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oh95zyn8o"/>`,
		"fallback": "iconoir:youtube-solid",
	});
}

export default Component;
