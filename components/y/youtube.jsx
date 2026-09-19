import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rja9fwbki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rja9fwbki"/>`,
		"fallback": "cbi:youtube",
	});
}

export default Component;
