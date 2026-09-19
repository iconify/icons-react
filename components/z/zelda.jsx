import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/he1_2w54z.css';

const viewBox = {"width":1026,"height":896};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="he1_2w54z"/>`,
		"fallback": "whh:zelda",
	});
}

export default Component;
