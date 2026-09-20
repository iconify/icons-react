import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn3le97iz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn3le97iz"/>`,
		"fallback": "thesvg-color:xwiki",
	});
}

export default Component;
