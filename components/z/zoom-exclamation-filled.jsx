import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jj1lh6o2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jj1lh6o2g"/>`,
		"fallback": "tabler:zoom-exclamation-filled",
	});
}

export default Component;
