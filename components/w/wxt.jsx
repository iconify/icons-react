import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ras8babnt.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ras8babnt"/>`,
		"fallback": "material-icon-theme:wxt",
	});
}

export default Component;
