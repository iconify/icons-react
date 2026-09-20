import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq-ess6cm.css';
import '../../css/h/h5ci0qb1w.css';
import '../../css/f/fd5oc7b6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq-ess6cm"/><path class="h5ci0qb1w"/><path class="fd5oc7b6h"/>`,
		"fallback": "streamline-freehand:zoom-in-magnifier-1",
	});
}

export default Component;
