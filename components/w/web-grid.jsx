import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwu44rb_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwu44rb_z"/>`,
		"fallback": "uit:web-grid",
	});
}

export default Component;
