import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekn5macxt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekn5macxt"/>`,
		"fallback": "reicon:wineglass2-filled",
	});
}

export default Component;
