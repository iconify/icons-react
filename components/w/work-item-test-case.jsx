import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/blwwl03cq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="blwwl03cq"/>`,
		"fallback": "pajamas:work-item-test-case",
	});
}

export default Component;
