import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrt9p0ian.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrt9p0ian"/>`,
		"fallback": "iconamoon:zoom-in",
	});
}

export default Component;
