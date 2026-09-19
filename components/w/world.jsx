import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvvot-35f.css';

const viewBox = {"width":750,"height":850};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvvot-35f"/>`,
		"fallback": "il:world",
	});
}

export default Component;
