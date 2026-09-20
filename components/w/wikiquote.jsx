import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-sbg5brz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-sbg5brz"/>`,
		"fallback": "thesvg-color:wikiquote",
	});
}

export default Component;
