import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oixe_xbgm.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oixe_xbgm"/>`,
		"fallback": "devicon-plain:youtrack-wordmark",
	});
}

export default Component;
