import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mt35k1b6i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mt35k1b6i"/>`,
		"fallback": "file-icons:yui",
	});
}

export default Component;
