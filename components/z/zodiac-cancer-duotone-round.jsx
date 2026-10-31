import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oging0-6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oging0-6n"/>`,
		"fallback": "coolicons:zodiac-cancer-duotone-round",
	});
}

export default Component;
