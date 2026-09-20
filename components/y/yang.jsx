import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqbek7buq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqbek7buq"/>`,
		"fallback": "material-icon-theme:yang",
	});
}

export default Component;
