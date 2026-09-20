import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/n/n3ylcwb-q.css';
import '../../css/a/aawotj6mg.css';
import '../../css/z/zl74uacec.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="n3ylcwb-q"/><path class="aawotj6mg"/><path class="zl74uacec"/></g>`,
		"fallback": "streamline-logos:youtube-tv-logo",
	});
}

export default Component;
