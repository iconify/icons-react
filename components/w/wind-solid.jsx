import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h917rt1ow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h917rt1ow"/>`,
		"fallback": "mynaui:wind-solid",
	});
}

export default Component;
