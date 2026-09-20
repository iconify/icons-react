import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r81o4zb5w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r81o4zb5w"/>`,
		"fallback": "streamline:zodiac-4-solid",
	});
}

export default Component;
