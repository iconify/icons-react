import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkje3ybpz.css';
import '../../css/d/d34fk4x7z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkje3ybpz"/><path class="d34fk4x7z"/>`,
		"fallback": "energy-icons:zoom-out-48",
	});
}

export default Component;
