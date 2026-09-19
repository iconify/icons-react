import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tzv4o8oal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tzv4o8oal"/>`,
		"fallback": "heroicons:x-mark-solid",
	});
}

export default Component;
