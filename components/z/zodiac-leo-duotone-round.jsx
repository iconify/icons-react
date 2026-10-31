import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vknv35b6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vknv35b6n"/>`,
		"fallback": "coolicons:zodiac-leo-duotone-round",
	});
}

export default Component;
