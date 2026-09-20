import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c737emz0a.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c737emz0a"/>`,
		"fallback": "streamline-flex:white-board-solid",
	});
}

export default Component;
