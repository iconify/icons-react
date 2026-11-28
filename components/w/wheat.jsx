import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7fh-abpp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7fh-abpp"/>`,
		"fallback": "noviair:wheat",
	});
}

export default Component;
