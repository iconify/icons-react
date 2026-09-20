import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dnp1ws47m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dnp1ws47m"/>`,
		"fallback": "streamline:zodiac-8-solid",
	});
}

export default Component;
