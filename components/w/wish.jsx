import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vd2wd4blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vd2wd4blj"/>`,
		"fallback": "thesvg-color:wish",
	});
}

export default Component;
