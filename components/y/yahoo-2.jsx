import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xw45ad8_w.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xw45ad8_w"/>`,
		"fallback": "wi:yahoo-2",
	});
}

export default Component;
