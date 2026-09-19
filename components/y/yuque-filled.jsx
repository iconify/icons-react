import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/og2kgpb5t.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="og2kgpb5t"/>`,
		"fallback": "ant-design:yuque-filled",
	});
}

export default Component;
