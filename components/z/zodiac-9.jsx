import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rgvooc2bu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rgvooc2bu"/>`,
		"fallback": "streamline-color:zodiac-9",
	});
}

export default Component;
