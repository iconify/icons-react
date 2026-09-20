import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkd3jjpvk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gkd3jjpvk"/>`,
		"fallback": "streamline:zodiac-4-remix",
	});
}

export default Component;
