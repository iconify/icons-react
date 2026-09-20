import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ewy0tw_xl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ewy0tw_xl"/>`,
		"fallback": "mynaui:x-triangle-solid",
	});
}

export default Component;
