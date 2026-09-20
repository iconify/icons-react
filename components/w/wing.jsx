import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kukv2j79e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kukv2j79e"/>`,
		"fallback": "token:wing",
	});
}

export default Component;
