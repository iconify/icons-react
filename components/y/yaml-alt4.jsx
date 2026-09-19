import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jvj-mdbng.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jvj-mdbng"/>`,
		"fallback": "file-icons:yaml-alt4",
	});
}

export default Component;
