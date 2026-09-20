import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b16bxbgpf.css';
import '../../css/y/yyxdkxbnm.css';

const viewBox = {"width":256,"height":180};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b16bxbgpf"/><path class="yyxdkxbnm"/>`,
		"fallback": "thesvg-color:youtube",
	});
}

export default Component;
