import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ulnm6hboq.css';
import '../../css/z/zgnbte-qu.css';
import '../../css/r/rkqq5dzkq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ulnm6hboq"/><path class="zgnbte-qu"/><path class="rkqq5dzkq"/>`,
		"fallback": "energy-icons:window-20",
	});
}

export default Component;
