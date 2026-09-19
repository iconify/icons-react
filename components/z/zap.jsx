import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db3bihb_j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db3bihb_j"/>`,
		"fallback": "catppuccin:zap",
	});
}

export default Component;
