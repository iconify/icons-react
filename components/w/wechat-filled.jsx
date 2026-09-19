import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxw6q2beu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxw6q2beu"/>`,
		"fallback": "ant-design:wechat-filled",
	});
}

export default Component;
