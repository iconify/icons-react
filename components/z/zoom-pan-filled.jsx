import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2-x1gb1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2-x1gb1v"/>`,
		"fallback": "tabler:zoom-pan-filled",
	});
}

export default Component;
