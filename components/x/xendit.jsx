import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/euf4b9b9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="euf4b9b9i"/>`,
		"fallback": "thesvg:xendit",
	});
}

export default Component;
