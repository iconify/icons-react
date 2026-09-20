import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dwszy3bem.css';
import '../../css/o/ovjr3gbvd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dwszy3bem"/><path class="ovjr3gbvd"/>`,
		"fallback": "qlementine-icons:woodwind-16",
	});
}

export default Component;
