import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn6g75bba.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kn6g75bba"/>`,
		"fallback": "streamline-color:zodiac-10-flat",
	});
}

export default Component;
