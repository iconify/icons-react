import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk94htewe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk94htewe"/>`,
		"fallback": "mynaui:x-solid",
	});
}

export default Component;
