import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hx-a_8bcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hx-a_8bcj"/>`,
		"fallback": "streamline-logos:wechat-logo-block",
	});
}

export default Component;
