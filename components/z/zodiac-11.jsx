import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvqxsz1-b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvqxsz1-b"/>`,
		"fallback": "streamline:zodiac-11",
	});
}

export default Component;
