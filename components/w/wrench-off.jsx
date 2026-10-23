import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9x7_fvwo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9x7_fvwo"/>`,
		"fallback": "vadivam:wrench-off",
	});
}

export default Component;
