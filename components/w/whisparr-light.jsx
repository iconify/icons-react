import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zjt81ppiq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zjt81ppiq"/>`,
		"fallback": "selfhst:whisparr-light",
	});
}

export default Component;
