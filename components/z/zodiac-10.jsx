import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v5hg73b-d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v5hg73b-d"/>`,
		"fallback": "streamline:zodiac-10",
	});
}

export default Component;
