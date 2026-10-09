import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mutfufb4a.css';
import '../../css/e/eo5ryvbqs.css';
import '../../css/t/tjrjm1bac.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mutfufb4a"/><path class="eo5ryvbqs"/><path class="tjrjm1bac"/>`,
		"fallback": "energy-icons:wine-glass-48-bold",
	});
}

export default Component;
