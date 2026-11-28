import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-x41qbyl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary v-x41qbyl"/>`,
		"fallback": "iconaut:wrench-duotone",
	});
}

export default Component;
