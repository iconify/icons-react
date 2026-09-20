import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cgv23sbgt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cgv23sbgt"/>`,
		"fallback": "mynaui:yen-waves",
	});
}

export default Component;
