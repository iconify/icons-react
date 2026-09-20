import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usdhhe98m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usdhhe98m"/>`,
		"fallback": "token:wrld",
	});
}

export default Component;
