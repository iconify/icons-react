import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvavf9b_l.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvavf9b_l"/>`,
		"fallback": "whh:zodiactaurus",
	});
}

export default Component;
