import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoz56jb1e.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoz56jb1e"/>`,
		"fallback": "whh:wwf",
	});
}

export default Component;
