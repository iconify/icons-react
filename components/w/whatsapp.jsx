import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npblpyoji.css';
import '../../css/j/jm3xaac9s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npblpyoji"/><path class="jm3xaac9s"/>`,
		"fallback": "nimbus:whatsapp",
	});
}

export default Component;
