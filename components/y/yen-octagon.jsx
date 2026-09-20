import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbn3z8r9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbn3z8r9n"/>`,
		"fallback": "mynaui:yen-octagon",
	});
}

export default Component;
