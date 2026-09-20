import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxy4-fu0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxy4-fu0a"/>`,
		"fallback": "mynaui:x-waves-solid",
	});
}

export default Component;
