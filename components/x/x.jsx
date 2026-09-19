import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga9bzj9gz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga9bzj9gz"/>`,
		"fallback": "cryptocurrency:x",
	});
}

export default Component;
