import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f52ia3bsx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f52ia3bsx"/>`,
		"fallback": "streamline:yuan-circle-solid",
	});
}

export default Component;
