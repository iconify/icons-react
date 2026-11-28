import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta7dw51we.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary ta7dw51we"/>`,
		"fallback": "iconaut:zodiac-aquarius-duotone",
	});
}

export default Component;
