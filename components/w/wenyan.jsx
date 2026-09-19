import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vn7txxnka.css';

const viewBox = {"width":300,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vn7txxnka"/>`,
		"fallback": "file-icons:wenyan",
	});
}

export default Component;
