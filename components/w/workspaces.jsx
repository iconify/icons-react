import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frh2pbb8k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frh2pbb8k"/>`,
		"fallback": "ix:workspaces",
	});
}

export default Component;
