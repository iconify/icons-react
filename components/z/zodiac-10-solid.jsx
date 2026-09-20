import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fah1b-_sv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fah1b-_sv"/>`,
		"fallback": "streamline:zodiac-10-solid",
	});
}

export default Component;
