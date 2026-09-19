import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xjb9smbld.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xjb9smbld"/>`,
		"fallback": "fluent-mdl2:workforce-management",
	});
}

export default Component;
