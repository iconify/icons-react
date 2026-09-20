import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fnb5mtbyb.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fnb5mtbyb"/>`,
		"fallback": "wi:wmo4680-92",
	});
}

export default Component;
