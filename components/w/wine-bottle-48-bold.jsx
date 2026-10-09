import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw-mwgb5w.css';
import '../../css/w/wt36fcmmz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw-mwgb5w"/><path class="wt36fcmmz"/>`,
		"fallback": "energy-icons:wine-bottle-48-bold",
	});
}

export default Component;
