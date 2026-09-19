import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-aa569ok.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-aa569ok"/>`,
		"fallback": "ant-design:x-outlined",
	});
}

export default Component;
