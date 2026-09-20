import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bw3y8b4sx.css';
import '../../css/c/ca93jgbml.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bw3y8b4sx"/><path class="ca93jgbml"/></g>`,
		"fallback": "streamline-flex-color:zip-folder",
	});
}

export default Component;
