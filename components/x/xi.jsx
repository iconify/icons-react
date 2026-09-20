import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayjea6ayf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayjea6ayf"/>`,
		"fallback": "mdi:xi",
	});
}

export default Component;
