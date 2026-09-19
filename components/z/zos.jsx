import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szqt0p1li.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szqt0p1li"/>`,
		"fallback": "carbon:zos",
	});
}

export default Component;
