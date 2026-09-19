import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juee6kbjo.css';

const viewBox = {"width":640,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juee6kbjo"/>`,
		"fallback": "whh:zurmo",
	});
}

export default Component;
