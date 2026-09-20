import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oo63pfbjq.css';
import '../../css/w/weqsqjbvf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oo63pfbjq"/><path clip-rule="evenodd" class="weqsqjbvf"/>`,
		"fallback": "qlementine-icons:youtube-16",
	});
}

export default Component;
