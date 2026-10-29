import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qk4pp05_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qk4pp05_i"/>`,
		"fallback": "withicons:wheat-solid",
	});
}

export default Component;
