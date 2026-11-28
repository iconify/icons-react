import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnwsbq4ky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnwsbq4ky"/>`,
		"fallback": "iconaut:zodiac-aries-solid",
	});
}

export default Component;
