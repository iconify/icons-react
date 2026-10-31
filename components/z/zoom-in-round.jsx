import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/er0sxpbmg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="er0sxpbmg"/>`,
		"fallback": "coolicons:zoom-in-round",
	});
}

export default Component;
