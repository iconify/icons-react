import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzq4r8brf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzq4r8brf"/>`,
		"fallback": "mage:youtube",
	});
}

export default Component;
