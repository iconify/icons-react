import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flcec9i_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="flcec9i_a"/>`,
		"fallback": "thesvg-color:wine",
	});
}

export default Component;
