import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fan6-n1tt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fan6-n1tt"/>`,
		"fallback": "iconaut:zoom-out-solid",
	});
}

export default Component;
