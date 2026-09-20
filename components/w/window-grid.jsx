import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g18t66qmd.css';
import '../../css/l/lf_du3q8d.css';
import '../../css/j/jcogv-28d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g18t66qmd"/><path class="lf_du3q8d"/><path class="jcogv-28d"/>`,
		"fallback": "uim:window-grid",
	});
}

export default Component;
