import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkvh3ejfk.css';

const viewBox = {"width":472,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkvh3ejfk"/>`,
		"fallback": "file-icons:windi",
	});
}

export default Component;
