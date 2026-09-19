import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yq8ni5b_w.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yq8ni5b_w"/>`,
		"fallback": "ant-design:weibo-outlined",
	});
}

export default Component;
