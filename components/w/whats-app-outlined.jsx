import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztm4cfb3x.css';
import '../../css/r/rx-beboiq.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztm4cfb3x"/><path class="rx-beboiq"/>`,
		"fallback": "ant-design:whats-app-outlined",
	});
}

export default Component;
