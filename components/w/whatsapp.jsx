import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1dkykb1h.css';
import '../../css/m/mtoynvb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1dkykb1h"/><path class="mtoynvb0z"/>`,
		"fallback": "uim:whatsapp",
	});
}

export default Component;
