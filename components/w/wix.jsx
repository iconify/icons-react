import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rktgnbb5d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rktgnbb5d"/>`,
		"fallback": "file-icons:wix",
	});
}

export default Component;
