import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c2_nfc4uj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c2_nfc4uj"/>`,
		"fallback": "streamline:zodiac-11-remix",
	});
}

export default Component;
