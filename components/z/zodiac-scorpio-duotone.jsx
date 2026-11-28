import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vto57bbdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary vto57bbdu"/>`,
		"fallback": "iconaut:zodiac-scorpio-duotone",
	});
}

export default Component;
