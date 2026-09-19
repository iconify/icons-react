import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_ayi0ben.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_ayi0ben"/>`,
		"fallback": "dinkie-icons:zhubai",
	});
}

export default Component;
