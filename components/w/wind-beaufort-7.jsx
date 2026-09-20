import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1wv2ynnq.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1wv2ynnq"/>`,
		"fallback": "wi:wind-beaufort-7",
	});
}

export default Component;
