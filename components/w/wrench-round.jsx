import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6y-rac8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6y-rac8j"/>`,
		"fallback": "coolicons:wrench-round",
	});
}

export default Component;
