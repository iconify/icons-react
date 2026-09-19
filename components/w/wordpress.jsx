import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o5ng3juba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o5ng3juba"/>`,
		"fallback": "fontisto:wordpress",
	});
}

export default Component;
