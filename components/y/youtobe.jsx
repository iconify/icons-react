import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/g/gful6qb2z.css';
import '../../css/i/ibg6j_bda.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="gful6qb2z"/><path class="ibg6j_bda"/></g>`,
		"fallback": "icon-park:youtobe",
	});
}

export default Component;
