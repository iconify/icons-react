import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tbu58ltdb.css';
import '../../css/b/bzdv1ob_h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="tbu58ltdb"/><path class="bzdv1ob_h"/></g>`,
		"fallback": "cryptocurrency-color:xpm",
	});
}

export default Component;
