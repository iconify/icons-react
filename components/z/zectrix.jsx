import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoz36pb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoz36pb4q"/>`,
		"fallback": "simple-icons:zectrix",
	});
}

export default Component;
