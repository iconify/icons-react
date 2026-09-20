import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyipr6b1y.css';
import '../../css/f/fqk1fbbsv.css';

const viewBox = {"width":214.574,"height":41.77,"left":-1.182,"top":-1.182};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyipr6b1y"/><path class="fqk1fbbsv"/>`,
		"fallback": "thesvg-color:wistron",
	});
}

export default Component;
