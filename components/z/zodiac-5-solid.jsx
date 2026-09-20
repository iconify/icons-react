import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwtctub0u.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mwtctub0u"/>`,
		"fallback": "streamline:zodiac-5-solid",
	});
}

export default Component;
