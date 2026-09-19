import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ratr-0b0y.css';

const viewBox = {"width":974,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ratr-0b0y"/>`,
		"fallback": "whh:whmcs",
	});
}

export default Component;
