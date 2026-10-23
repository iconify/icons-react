import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7n6z9bdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7n6z9bdy"/>`,
		"fallback": "vadivam:wind-arrow-up",
	});
}

export default Component;
