import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6o3ktbcu.css';
import '../../css/w/wjyxzxbul.css';
import '../../css/y/yj4lhpb4g.css';

const viewBox = {"width":1028,"height":254};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6o3ktbcu"/><path class="wjyxzxbul"/><path class="yj4lhpb4g"/>`,
		"fallback": "thesvg-color:whoogle-search",
	});
}

export default Component;
