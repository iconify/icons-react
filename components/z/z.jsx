import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb9ltdbub.css';

const viewBox = {"width":520,"height":654};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb9ltdbub"/>`,
		"fallback": "ls:z",
	});
}

export default Component;
