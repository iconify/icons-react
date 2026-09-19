import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhvh4xbwq.css';
import '../../css/f/fj4btac-b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhvh4xbwq"/><path class="fj4btac-b"/>`,
		"fallback": "gridicons:zoom-in",
	});
}

export default Component;
