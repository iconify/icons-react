import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jg8tdxbvj.css';

const viewBox = {"width":717,"height":698};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jg8tdxbvj"/>`,
		"fallback": "ls:wink",
	});
}

export default Component;
