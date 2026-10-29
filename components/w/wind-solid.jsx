import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gmu5l1qta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gmu5l1qta"/>`,
		"fallback": "withicons:wind-solid",
	});
}

export default Component;
