import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc6yfl_7l.css';

const viewBox = {"width":1025,"height":898};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc6yfl_7l"/>`,
		"fallback": "whh:zenphoto",
	});
}

export default Component;
