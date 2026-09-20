import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ignkp931j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ignkp931j"/>`,
		"fallback": "streamline-color:zodiac-2-flat",
	});
}

export default Component;
