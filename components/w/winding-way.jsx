import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mktx9y2zd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mktx9y2zd"/>`,
		"fallback": "pinhead:winding-way",
	});
}

export default Component;
