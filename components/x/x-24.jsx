import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/momvlfb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="momvlfb7o"/>`,
		"fallback": "octicon:x-24",
	});
}

export default Component;
