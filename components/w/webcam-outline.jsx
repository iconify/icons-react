import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tnf6ldb9q.css';
import '../../css/z/zjftgfb_b.css';
import '../../css/c/c32p5b3tz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tnf6ldb9q"/><path class="zjftgfb_b"/><path clip-rule="evenodd" class="c32p5b3tz"/>`,
		"fallback": "solar:webcam-outline",
	});
}

export default Component;
