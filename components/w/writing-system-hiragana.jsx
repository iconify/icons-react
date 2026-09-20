import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gt66w7kwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gt66w7kwd"/>`,
		"fallback": "mdi:writing-system-hiragana",
	});
}

export default Component;
