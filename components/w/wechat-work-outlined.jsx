import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/guz3d-buf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="guz3d-buf"/>`,
		"fallback": "ant-design:wechat-work-outlined",
	});
}

export default Component;
