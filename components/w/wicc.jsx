import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ou7zrpb1s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ou7zrpb1s"/>`,
		"fallback": "cryptocurrency:wicc",
	});
}

export default Component;
