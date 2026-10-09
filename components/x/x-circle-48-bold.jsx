import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2neunb3u.css';
import '../../css/z/z5n8juber.css';
import '../../css/z/zxkwv-2ro.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2neunb3u"/><path class="z5n8juber"/><path class="zxkwv-2ro"/>`,
		"fallback": "energy-icons:x-circle-48-bold",
	});
}

export default Component;
