import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2i44lbff.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2i44lbff"/>`,
		"fallback": "streamline:widget",
	});
}

export default Component;
