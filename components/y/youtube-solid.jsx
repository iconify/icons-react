import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx3z-nbzh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lx3z-nbzh"/>`,
		"fallback": "streamline-flex:youtube-solid",
	});
}

export default Component;
