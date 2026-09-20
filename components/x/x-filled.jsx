import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jfrm-9bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jfrm-9bie"/>`,
		"fallback": "tabler:x-filled",
	});
}

export default Component;
