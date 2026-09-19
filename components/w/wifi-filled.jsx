import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lx7mb-bib.css';
import '../../css/z/zapq_sb9r.css';
import '../../css/y/y_knajrym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lx7mb-bib"/><path class="zapq_sb9r"/><path class="y_knajrym"/>`,
		"fallback": "boxicons:wifi-filled",
	});
}

export default Component;
