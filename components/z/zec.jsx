import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3muny3xv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3muny3xv"/>`,
		"fallback": "token:zec",
	});
}

export default Component;
