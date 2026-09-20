import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ifegf4bzn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ifegf4bzn"/>`,
		"fallback": "tabler:zoom-out-area-filled",
	});
}

export default Component;
