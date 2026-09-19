import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tkd5ofbbl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tkd5ofbbl"/>`,
		"fallback": "file-icons:zorinos",
	});
}

export default Component;
