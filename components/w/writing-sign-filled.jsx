import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t4ifs6byh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t4ifs6byh"/>`,
		"fallback": "tabler:writing-sign-filled",
	});
}

export default Component;
