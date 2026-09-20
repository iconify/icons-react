import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wyh6kobku.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wyh6kobku"/>`,
		"fallback": "streamline-color:wrench-flat",
	});
}

export default Component;
