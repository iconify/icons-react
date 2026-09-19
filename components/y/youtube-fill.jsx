import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctk7unbgm.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctk7unbgm"/>`,
		"fallback": "ant-design:youtube-fill",
	});
}

export default Component;
