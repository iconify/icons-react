import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trh51ymmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trh51ymmn"/>`,
		"fallback": "tabler:zoom-check-filled",
	});
}

export default Component;
