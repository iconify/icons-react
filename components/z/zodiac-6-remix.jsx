import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib25mbb5o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ib25mbb5o"/>`,
		"fallback": "streamline:zodiac-6-remix",
	});
}

export default Component;
